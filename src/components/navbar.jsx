import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
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
      <Link to="/" className="d-flex justify-content-center mt-3">
        <img src={JJlogo} className="JJlogo" />
      </Link>
      <div className="d-flex justify-content-between align-botttom">
        <Link to="/about" className="align-self-center pt-5 p-3">
          About
        </Link>

        <Link to="/shop" className="align-self-center pt-5 p-3">
          Shop
        </Link>
        {props.isAuthenticated ? (
          <>
            <Button
              className="align-self-center mt-5 m-3"
              onClick={logoutUser}
              variant="danger"
            >
              Logout
            </Button>
            <div>
              <Link to="/cart" className="align-self-center">
                My Cart
              </Link>
              <p>Items in cart: {props.currentUser.cart.length}</p>
            </div>
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
