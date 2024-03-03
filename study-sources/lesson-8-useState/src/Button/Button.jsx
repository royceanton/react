// // 2. Modules sytling
// //    - This is one of the best way to style react components, but you have to
// //      use the .module.css extension for the file name and import the styles

// import styles from "./Button.module.css";

// function Button() {
//   // const handleClick = () => { console.log('OUCH!!') }

//   // const handleClick2 = (name) => console.log(`${name} stop clicking me! 😡`)

//   let count = 0;
//   const handleClick = (name) => {
//     if (count < 3) {
//       count++;
//       console.log(`${name}, You clicked me ${count} times! 😌`);
//     } else {
//       console.log(`${name}, Stop clicking me! 😡`);
//     }
//   };

//   return (
//     // <button className={styles.button} onClick={handleClick}>Click me 😌 </button>
//     // <button className={styles.button} onClick={ () => handleClick2("Bro!")}>Click me 😌 </button>
//     <button className={styles.button} onClick={() => handleClick("Bro")}>
//       Click me 😌{" "}
//     </button>
//   );
// }

// export default Button;

// event parameter

import styles from "./Button.module.css";

function Button() {
  const handleClick = (e) => (e.target.textContent = "OUCH!! 😡");
  
  //   const handleClick = (e) => {
  //     console.log(e);
  //   };

  return (
    <>
      <button className={styles.button} onClick={(e) => handleClick(e)}>
        Click me 😌
      </button>
      <button className={styles.button} onDoubleClick={(e) => handleClick(e)}>
        Double Click me 😌
      </button>
    </>
  );
}

export default Button;
