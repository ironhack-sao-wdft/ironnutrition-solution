// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
    totalCalories: 0,
  });

  function handleChange(e) {
    if (e.target.name === 'calories') {
      setForm({
        ...form,
        calories: e.target.value,
        totalCalories: form.servings * e.target.value,
      });

      return;
    }

    if (e.target.name === 'servings') {
      setForm({
        ...form,
        servings: e.target.value,
        totalCalories: form.calories * e.target.value,
      });

      return;
    }

    setForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function handleAddFood(e) {
    e.preventDefault();

    props.addFoods((prevState) => [form, ...prevState]);
  }

  return (
    <form onSubmit={handleAddFood}>
      <Divider>Add Food Entry</Divider>
      <label htmlFor="input-name">Name</label>
      <input
        id="input-name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="input-image">Image</label>
      <input
        id="input-image"
        type="text"
        name="image"
        value={form.image}
        onChange={handleChange}
      />
      <label htmlFor="input-calories">Calories</label>
      <input
        id="input-calories"
        type="number"
        name="calories"
        value={form.calories}
        onChange={handleChange}
      />
      <label htmlFor="input-servings">Servings</label>
      <input
        id="input-servings"
        type="number"
        name="servings"
        value={form.servings}
        onChange={handleChange}
      />
      <strong>Total calories:</strong> <p> {form.totalCalories}</p>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
