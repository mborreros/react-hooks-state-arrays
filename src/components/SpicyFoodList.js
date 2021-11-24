// using a state variable to hold an array of spicy foods;
// using that array to display each spicy food as an <li>; and
// adding a new spicy food to the array when the button is clicked.

import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newSpicyFoods = [...foods, newFood]
    setFoods(newSpicyFoods)
  }

  let foodElements = (foods.map((spicyFood) => <li key={spicyFood.id}>{spicyFood.name}</li>))

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>
        {foodElements}
      </ul>
    </div>
  );
}

export default SpicyFoodList;
