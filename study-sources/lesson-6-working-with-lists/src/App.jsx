// import Lists from "./Lists";

// function App() {

//   // when using props
//   const fruits = [
//     { id: 1, name: "Apple", calories: 95 },
//     { id: 2, name: "Banana", calories: 105 },
//     { id: 3, name: "Orange", calories: 62 },
//     { id: 4, name: "Mango", calories: 202 },
//     { id: 5, name: "Pineapple", calories: 83 },
//   ];

//   const vegetables = [
//     { id: 1, name: "Carrot", calories: 41 },
//     { id: 2, name: "Broccoli", calories: 55 },
//     { id: 3, name: "Cauliflower", calories: 25 },
//     { id: 4, name: "Spinach", calories: 23 },
//     { id: 5, name: "Cabbage", calories: 22 },
//   ];

//   return (
//     // when using no props
//     // <>
//     // <Lists />
//     // </>

//     // when using props
//     <>
//       <Lists items={fruits} category="Fruits"/>
//       <Lists items={vegetables} category="Vegetables"/>
//     </>
//   );
// }

// module style import and use and using props

import List from "./List/List.jsx";
import Button from "./Button/Button.jsx";

function App() {

  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Orange", calories: 62 },
    { id: 4, name: "Mango", calories: 202 },
    { id: 5, name: "Pineapple", calories: 83 },
  ];

  const fruitsWithEmptyList = [
    // { id: 1, name: "Apple", calories: 95 },
    // { id: 2, name: "Banana", calories: 105 },
    // { id: 3, name: "Orange", calories: 62 },
    // { id: 4, name: "Mango", calories: 202 },
    // { id: 5, name: "Pineapple", calories: 83 },
  ];

  const vegetable = [
    { id: 1, name: "Carrot", calories: 41 },
    { id: 2, name: "Broccoli", calories: 55 },
    { id: 3, name: "Cauliflower", calories: 25 },
    { id: 4, name: "Spinach", calories: 23 },
    { id: 5, name: "Cabbage", calories: 22 },
  ];

  const vegetableWithEmptyList = [
    // { id: 1, name: "Carrot", calories: 41 },
    // { id: 2, name: "Broccoli", calories: 55 },
    // { id: 3, name: "Cauliflower", calories: 25 },
    // { id: 4, name: "Spinach", calories: 23 },
    // { id: 5, name: "Cabbage", calories: 22 },
  ];

  return (
    <> 

    {fruits.length >0  && <List items={fruits} category="Fruits"/>}
    {fruitsWithEmptyList.length >0  && <List items={fruitsWithEmptyList} category="Fruits with empty list not shown"/>}
    {vegetable.length >0  ? <List items={vegetable} category="Vegetables"/> : null}
    {vegetableWithEmptyList.length >0  ? <List items={vegetableWithEmptyList} category="Vegetables wih empty list not shown"/> : null}
    <Button />
    </>
  );
}

export default App;
