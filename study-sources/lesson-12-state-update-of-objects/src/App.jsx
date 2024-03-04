// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(year +1)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Guarantees the previous state is up to date and good practice to use it


import styles from "./App.module.css";
import MyComponenet from "./MyComponent/MyComponent";

function App() {


  return (
    <div className={styles.container}> 
      <MyComponenet />
    </div>
  );
}

export default App;
