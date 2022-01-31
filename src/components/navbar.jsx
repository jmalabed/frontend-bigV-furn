import Container from "react-bootstrap/Container";

const Navbar = (props) => {
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
        <a href="/login" className="align-self-center pt-5 p-3">
          Login
        </a>
        <a href="/register" className="align-self-center pt-5 p-3">
          Register
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
