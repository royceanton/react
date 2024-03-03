import React, { useState } from "react";
import styles from "./MyComponent.module.css";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Bro Code");
  };

  const incrementAge = () => {
    setAge(age + 69);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <h1 className={styles.h1}>My Component</h1>
      <p className={styles.p1}>Name: {name}</p>
      <button className={styles.button} onClick={updateName}>
        Set Name
      </button>

      <p className={styles.p1}>Age: {age}</p>
      <button className={styles.button} onClick={incrementAge}>
        Increment Age
      </button>

      <p className={styles.p1}>Is employed: {isEmployed ? "Yes" : "No"} </p>
      <button className={styles.button} onClick={toggleEmployedStatus}>
        Toggle Status
      </button>
    </div>
  );
}

export default MyComponent;
