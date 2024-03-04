// updater function = A function passed as an argument to setState() usually
//                    ex.instead of setYear(year +1) use setYear(updater function) .... setYear(prevYear => prevYear + 1)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Guarantees the previous state is up to date and good practice to use it

// import React, { useState } from "react";
// import styles from "./MyComponent.module.css";

// Example 1

// function MyComponent() {
//   const [foods, setFoods] = useState(["apple", "banana", "cherry"]);

//   function handleAddFood() {
//     const newFood = document.getElementById("foodInput").value;
//     document.getElementById("foodInput").value = "";

//     setFoods((f) => [...f, newFood]);
//   }

//   function handleRemoveFood(index) {
//     setFoods(foods.filter((_, i) => i !== index));
//   }

//   return (
//     <div>
//       <h2>Current list of Foods added to the list :</h2>
//       <ul>
//         {foods.map((food, index) => (
//           <li className={styles.listItems} key={index} onClick={() => handleRemoveFood(index)}>
//             {food}
//           </li>
//         ))}
//       </ul>

//       <input className={styles.inputBar} type="text" id="foodInput" placeholder="Enter food name" />
//       <button className={styles.button} onClick={handleAddFood}>Add Food</button>
//       <p>
//         Your current favourite foods are: {foods[0]} {foods[1]} {foods[2]}
//       </p>
//       <p>If you want to remove a food, click on it.</p>
//     </div>
//   );
// }

// Example 2

import React, { useState } from "react";
import styles from "./MyComponent.module.css";

function MyComponent() {
  const [car, setCar] = useState([]);
  const [carYear, setYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCar((c) => [...c, newCar]);

    setYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCar(car.filter((_, i) => i !== index));
  }

  function handleYearChange(e) {
    setYear(e.target.value);
  }

  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }

  function handleModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <div>
      <h2>Current list of Cars objects: </h2>
      <ul>
        {car.map((car, index) => (
          <li
            className={styles.listItems}
            key={index}
            onClick={() => handleRemoveCar(index)}
          >
            {car.year}
            {car.make}
            {car.model}
          </li>
        ))}
      </ul>

      <input
        className={styles.inputBar}
        type="number"
        value={carYear}
        onChange={handleYearChange}
      />
      <br />
      <input
        className={styles.inputBar}
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <br />
      <input
        className={styles.inputBar}
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button className={styles.button} onClick={handleAddCar}>
        Add Car
      </button>
    </div>
  );
}

export default MyComponent;
