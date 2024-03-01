import propTypes from "prop-types";

function Student(props) {
  const student = {
    fontSize: "2em",
    border: "2px solid white",
    padding: "10px",
    margin: "10px",
  };

  const pStyle = {
    color: "white",
    fontWeight: "bold",
    margin: 0,
  };

  return (
    <div style={student}>
      <p style={pStyle}> Name: {props.name}</p>
      <p style={pStyle}> Age: {props.age}</p>
      <p style={pStyle}> Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  isStudent: propTypes.bool.isRequired,
}

Student.defaultProps = {
  name: "John Doe",
  age: 0,
  isStudent: false,
}

export default Student;
