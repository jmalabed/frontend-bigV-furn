import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { setUserToken, getUserToken } from "../utils/authToken";

const Navbar = (props) => {
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      const loggingOutUser = await fetch("http://localhost:9000/auth/logout", {
        headers: {
          Authorization: `bearer ${getUserToken()}`,
        },
      });
      const parsedOut = await loggingOutUser.json();
      console.log(parsedOut);
      setUserToken(parsedOut.token);
      props.setIsAuthenticated(false);
    } catch (err) {
      console.log(err);
      navigate("/shop");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-botttom">
        <a href="/about" className="justify-content-end pt-5 p-3">
          About
        </a>
        <a href="/" className="align-self-center">
          <h1>JJ's</h1>
        </a>
        <a href="/shop" className="align-self-center pt-5 p-3">
          Shop
        </a>
        {props.isAuthenticated ? (
          <a className="align-self-center pt-5 p-3" onClick={logoutUser}>
            Logout
          </a>
        ) : (
          <a href="/login" className="align-self-center pt-5 p-3">
            Login
          </a>
        )}
        <a href="/register" className="align-self-center pt-5 p-3">
          Register
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
