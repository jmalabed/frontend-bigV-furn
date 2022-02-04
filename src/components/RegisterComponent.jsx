import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterComponent = (props) => {
  const navigate = useNavigate();
  const initialState = { username: "", password: "" };
  const [input, setInput] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdUserToken = await props.registerUser(input);
    setInput(initialState);
    if (createdUserToken) {
      navigate("/shop");
    } else {
      navigate("/register");
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          value={input.username}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
export default RegisterComponent;
