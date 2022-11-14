import { useState, useEffect } from 'react';

export function Search(props) {
  const [filterString, setFilterString] = useState('');

  function handleChange(e) {
    setFilterString(e.target.value);
  }

  useEffect(() => {
    if (filterString === '') {
      props.filtredFunction(props.allFoods);
      return;
    }

    props.filtredFunction(() => {
      return props.allFoods.filter((currentElement) => {
        return currentElement.name
          .toLowerCase()
          .includes(filterString.toLowerCase());
      });
    });
  }, [filterString]);

  return (
    <div>
      <input type="text" onChange={handleChange} value={filterString} />
    </div>
  );
}
