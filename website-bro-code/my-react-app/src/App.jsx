import Lists from "./Lists";

function App() {

  // when using props
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Orange", calories: 62 },
    { id: 4, name: "Mango", calories: 202 },
    { id: 5, name: "Pineapple", calories: 83 },
  ];

  return (
    // when using no props
    // <>
    // <Lists />
    // </>

    // when using props
    <>
      <Lists items={fruits} category="Fruits"/>
    </>
  );
}

export default App;
