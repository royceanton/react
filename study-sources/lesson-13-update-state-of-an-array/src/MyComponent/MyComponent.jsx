// updater function = A function passed as an argument to setState() usually
//                    ex.instead of setYear(year +1) use setYear(updater function) .... setYear(prevYear => prevYear + 1)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Guarantees the previous state is up to date and good practice to use it

import React, { useState } from "react";
import styles from "./MyComponent.module.css";

function MyComponent() {
  const [foods, setFoods] = useState(["apple", "banana", "cherry"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Current list of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>

      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
      <p>
        Your current favourite foods are: {foods[0]} {foods[1]} {foods[2]}
        If you want to remove a food, click on it.
      </p>
    </div>
  );
}

export default MyComponent;
