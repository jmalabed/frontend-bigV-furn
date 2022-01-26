import LoginComponent from "../components/LoginComponent";

const Login = (props) => {
  return (
    <div>
      <LoginComponent
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
    </div>
  );
};

export default Login;
