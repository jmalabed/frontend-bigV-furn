import LoginComponent from "../components/LoginComponent";

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginComponent loginUser={props.loginUser} />
    </div>
  );
};

export default Login;
