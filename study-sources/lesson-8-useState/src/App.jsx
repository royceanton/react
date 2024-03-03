// React hook = Special function that allows functional components
//              to use React features without writing class components (React v16.8)
//              useState = React hook that allows you to use state in a functional component
//              (useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue)

// useState() = A React hook that allows you create a stateful variable AND
//             a setter function to update its value in the Virtual DOM.
//             [name, setName]

import MyComponent from "./MyComponent/MyComponent";
import Counter from "./Counter/Counter";
import styles from "./App.module.css";

function App() {


  return (
    <div className={styles.container}> 
    <MyComponent/>
    <Counter />
    </div>
  );
}

export default App;
