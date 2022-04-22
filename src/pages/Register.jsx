import { Container } from "react-bootstrap";
import RegisterComponent from "../components/RegisterComponent";

const Register = (props) => {
  return (
    <Container>
      <h1 className="mx-5 mb-5 text-center">Register</h1>
      <RegisterComponent registerUser={props.registerUser} />
    </Container>
  );
};
export default Register;
