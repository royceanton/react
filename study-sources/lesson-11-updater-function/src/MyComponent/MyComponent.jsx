// updater function = A function passed as an argument to setState() usually
//                    ex.instead of setYear(year +1) use setYear(updater function) .... setYear(prevYear => prevYear + 1)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Guarantees the previous state is up to date and good practice to use it

import React, { useState } from "react";
import styles from "./MyComponent.module.css";

function MyComponent() {
  const [count, setCount] = useState(0);

  function increment() {
    // Uses the CURRENT state to calculate the NEXT state
    // set function do not trigger updates immediately
    // React batches together state updates for performance reasons
    // NEXT becomes the CURRENT state after an update

    // This would not increment 1 and the increment the next one by 1 and that answer by 1.
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // Use the updater function to increment the count by 1
    // take first letter of the state variable and use it as a parameter
    // setCount(c => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  // // this is without the updater function
  // function decrement() {
  //   setCount(count - 1);
  //   setCount(count - 1);
  //   setCount(count - 1);
  // }

  // this is with the updater function
  function decrement() {
    setCount(c => c - 1);
    setCount(c => c - 1);
    setCount(c => c - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button className={styles.button} onClick={increment}>
        Increment
      </button>
      <button className={styles.button} onClick={decrement}>
        Decrement
      </button>
      <button className={styles.button} onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default MyComponent;
