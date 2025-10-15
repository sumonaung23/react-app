import PropTypes from "prop-types";

function UserGreeting (props) {
    const welcomeMessage = <h1 className="text-3xl text-center w-auto m-13 p-5 bg-blue-500 text-blue-100 rounded-sm">Welcome Ms.{props.name}</h1>;

    const logInMessage = <h3>Please log in first!</h3>

    return (
        props.isLoggedIn ? welcomeMessage : logInMessage
    );
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    name: "Su",
}

export default UserGreeting