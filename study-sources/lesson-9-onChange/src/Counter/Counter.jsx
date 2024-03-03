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
        <div className={styles.counterContainer}>
            <h1 className={styles.counterApp}>Counter App</h1>
            <p className={styles.count}>{count}</p>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={increment}>Increment</button>
                <button className={styles.button} onClick={decrement}>Decrement</button>
                <button className={styles.button} onClick={reset}>Reset</button>
            </div>
        </div>
    );

}

export default Counter;