import foodsArr from './foods.json';

import { Row } from 'antd';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import { Search } from './components/Search';

import { useState, useEffect } from 'react';

function App() {
  //Todas as comidas > como se fosse meu banco de dados
  const [foods, setFoods] = useState(foodsArr);

  //O que aparece na tela
  const [filtredFood, setFiltredFoods] = useState(foods);

  useEffect(() => {
    setFiltredFoods(foods);
  }, [foods]);

  return (
    <div className="App">
      <Form addFoods={setFoods} />

      <Search filtredFunction={setFiltredFoods} allFoods={foods} />
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filtredFood.map((currentElement) => {
          return (
            <FoodBox
              name={currentElement.name}
              calories={currentElement.calories}
              image={currentElement.image}
              servings={currentElement.servings}
              deleteFunc={setFoods}
              attRenderFunc={setFiltredFoods}
              allFoods={foods}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
