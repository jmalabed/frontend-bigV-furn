import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginComponent = (props) => {
  const navigate = useNavigate();
  const initialState = { username: "", password: "" };
  const [input, setInput] = useState(initialState);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const createdUserToken = await props.loginUser(input);
      setInput(initialState);
      console.log(createdUserToken);
      if (createdUserToken.error) {
        alert(
          "Username and password combination does not exist within our database. Please try again."
        );
      } else if (createdUserToken) {
        navigate("/shop");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
        />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
};

export default LoginComponent;
