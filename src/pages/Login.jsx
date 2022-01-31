import LoginComponent from "../components/LoginComponent";

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginComponent
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
    </div>
  );
};

export default Login;
