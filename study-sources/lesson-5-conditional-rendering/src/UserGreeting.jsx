import PropTypes from "prop-types";

function UserGreeting(props) {
  // if (props.isLoggedIn) {
  //     return <h1>Welcome back, {props.username}!</h1>;
  // }
  // return <h1>Welcome, Guest! Please Sign in</h1>;

  const welcomeMessage = {

    color: "white",
    backgroundColor: "green",

  };

  const loginPrompt = {
    color: "white",
    backgroundColor: "red",
  };

  return props.isLoggedIn ? (
    <h1 style={welcomeMessage}>Welcome back, {props.username}!</h1>
  ) : (
    <h1 style={loginPrompt}>Welcome, Guest! Please Sign in</h1>
  );
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting;
