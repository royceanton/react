import React, { useState } from "react";
import styles from "./Counter.module.css";


function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div >
            <h1 className={styles.counterApp}>Counter App</h1>
            <p className={styles.count}>Count: {count}</p>
            <button className={styles.button} onClick={increment}>Increment</button>
            <button className={styles.button} onClick={decrement}>Decrement</button>
            <button className={styles.button} onClick={reset}>Reset</button>
        </div>
    );

}

export default Counter;