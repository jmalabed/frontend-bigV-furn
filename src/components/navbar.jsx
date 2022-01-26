import Container from "react-bootstrap/Container";

const Navbar = (props) => {
  return (
    <div>
      <div class="d-flex justify-content-between align-botttom">
        <a href="/about" class="justify-content-end pt-5 p-3">
          About
        </a>
        <a href="/" class="align-self-center">
          <h1>JJ's</h1>
        </a>
        <a href="/shop" class="align-self-center pt-5 p-3">
          Shop
        </a>
        <a href="/login" class="align-self-center pt-5 p-3">
          Login
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
