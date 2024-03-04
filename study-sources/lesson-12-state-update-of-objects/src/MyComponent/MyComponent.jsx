// updater function = A function passed as an argument to setState() usually
//                    ex.instead of setYear(year +1) use setYear(updater function) .... setYear(prevYear => prevYear + 1)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Guarantees the previous state is up to date and good practice to use it

import React, { useState } from "react";
import styles from "./MyComponent.module.css";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Tesla",
    model: "Model S",
  });

  function handleYearChange(e) {
    setCar((c) => ({
      ...c, // spread operator of the car object
      year: e.target.value,
    })); //and then we update the year property
  }

  function handleMakeChange(e) {
    setCar({...car, make: e.target.value})
  }

  function handleModelChange(e) {
    setCar({...car, model: e.target.value});
  }

  return (
    <div>
      <p>
        {" "}
        Your favourite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />{" "}
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
      <input type="text" value={car.model} onChange={handleModelChange} />{" "}
      <br />
    </div>
  );
}

export default MyComponent;
