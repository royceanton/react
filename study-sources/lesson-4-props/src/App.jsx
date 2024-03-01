// props = read-only properties that are shared between components.
//         A parent component can send props to a child component.
//         A child component can use props to render dynamic data.
//         Props are immutable, meaning that they cannot be changed.
//         <Component key= value />

// propTypes =  a mechanism that ensures that the passed value is of
//              the correct datatype. It is used to catch bugs and errors
//              age: PropTypes.number

// defaultProps =  a mechanism that sets default values for props.
//                 name: "John Doe"

import Student from './Student.jsx';

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={25} isStudent={false}/>
      <Student name="Squidward" age={35} isStudent={false}/>
      <Student name="Sandy" age={28} isStudent={true}/>
      <Student name="Mr. Krabs" age={40} isStudent={false}/>
      <Student /> {/* default props */}
    </>
  );
}

export default App;
