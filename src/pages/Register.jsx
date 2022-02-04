import RegisterComponent from "../components/RegisterComponent";

const Register = (props) => {
  return (
    <div>
      <h1>Register User</h1>
      <RegisterComponent registerUser={props.registerUser} />
    </div>
  );
};
export default Register;
