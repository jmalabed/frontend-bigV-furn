import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { setUserToken, getUserToken } from "../utils/authToken";
import JJlogo from "../img/JJs.png";

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
      <div className="d-flex justify-content-between navigationBar">
        <Link to="/about" className="align-self-center my-2 mx-5" id="navLink">
          About
        </Link>

        <Link to="/shop" className="align-self-center my-2 mx-5" id="navLink">
          Shop
        </Link>
        {props.isAuthenticated ? (
          <>
            <Button
              className="align-self-center mx-5 my-2"
              onClick={logoutUser}
              variant="danger"
            >
              Logout
            </Button>
            <div>
              <Link
                to="/cart"
                className="align-self-center mx-5 my-2"
                id="navLink"
              >
                My Cart
              </Link>
              <p>Items in cart: {props.currentUser.cart.length}</p>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="align-self-center my-2 mx-5"
              id="navLink"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="align-self-center my-2 mx-5"
              id="navLink"
            >
              Register
            </Link>
          </>
        )}
      </div>
      <Link to="/" className="d-flex justify-content-center mt-3">
        <img src={JJlogo} className="JJlogo" />
      </Link>
      <hr />
    </div>
  );
};

export default Navbar;
