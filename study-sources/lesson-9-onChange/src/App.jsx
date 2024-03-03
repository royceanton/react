// onChange = event handler is used primarily with form elements
//            ex. <inputs>, <textarea>, <select>, <radio>, <checkbox>
//            - it is used to capture the value entered by the user
//            Triggers a function everytime the value of the input chnages

import styles from "./App.module.css";
import MyComponent from "./MyComponent/MyComponent";

function App() {


  return (
    <div className={styles.container}> 
      <MyComponent />
    </div>
  );
}

export default App;
