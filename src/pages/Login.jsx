import LoginComponent from "../components/LoginComponent";
import { Container } from "react-bootstrap";

const Login = (props) => {
  return (
    <Container>
      <h1 className="text-center mb-5 mx-5">Login</h1>
      <LoginComponent loginUser={props.loginUser} />
    </Container>
  );
};

export default Login;
