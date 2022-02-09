import Container from "react-bootstrap/Container";
import { useNavigate, Link } from "react-router-dom";
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
      <Link to="/" className="align-self-center">
        <h1>JJ's</h1>
      </Link>
      <div className="d-flex justify-content-between align-botttom">
        <Link to="/about" className="justify-content-end pt-5 p-3">
          About
        </Link>

        <Link to="/shop" className="align-self-center pt-5 p-3">
          Shop
        </Link>
        {props.isAuthenticated ? (
          <>
            <button className="align-self-center pt-5 p-3" onClick={logoutUser}>
              Logout
            </button>
            <Link to="/cart" className="align-self-center pt-5 p-3">
              My Cart
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="align-self-center pt-5 p-3">
              Login
            </Link>
            <Link to="/register" className="align-self-center pt-5 p-3">
              Register
            </Link>
          </>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
