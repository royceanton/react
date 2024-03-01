// without using props

// function Lists() {
//   // const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

//   //   fruits.sort();
//   //   const listItems = fruits.map((fruit) => <li>{fruit}</li>);

//   // rewrite fruits as objects
//   const fruits = [
//     { id: 1, name: "Apple", calories: 95 },
//     { id: 2, name: "Banana", calories: 105 },
//     { id: 3, name: "Orange", calories: 62 },
//     { id: 4, name: "Mango", calories: 202 },
//     { id: 5, name: "Pineapple", calories: 83 },
//   ];

//   // sort fruits
//   // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical order
//   // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse alphabetical order
//   // fruits.sort((a, b) => a.calories - b.calories); // numerical order
//   // fruits.sort((a, b) => b.calories - a.calories); // reverse numerical order

//   // filter fruits
//   const lowCalFruit = fruits.filter((fruit) => fruit.calories < 100);
//   const highCalFruit = fruits.filter((fruit) => fruit.calories > 100);

//   //   display fruits
//   //     const listItems = fruits.map((fruit) => (
//   //       <li key={fruit.id}>
//   //         {fruit.name}: &nbsp; <b>{fruit.calories}</b>
//   //       </li>
//   //     ));

//   //   // display lowCalFruit
//   //   const listItems = lowCalFruit.map((lowCalFruit) => (
//   //     <li key={lowCalFruit.id}>
//   //       {lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b>
//   //     </li>
//   //   ));

//   // display highCalFruit
//   const listItems = highCalFruit.map((highCalFruit) => (
//     <li key={highCalFruit.id}>
//       {highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b>
//     </li>
//   ));

//   return (
//     <>
//       <ol>{listItems}</ol>
//     </>
//   );
// }

// export default Lists;

// using props

function Lists(props) {

    const itemList = props.items;

    const listItems = itemList.map((item) => (
      <li key={item.id}>
        {item.name}: &nbsp; <b>{item.calories}</b>
      </li>
    ));

    return (
      <>
        <h1>{props.category}</h1>
        <ol>{listItems}</ol>
      </>
    );

}

export default Lists;