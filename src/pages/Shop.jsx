import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Shop = (props) => {
  return (
    <div>
      <h1>Categories</h1>
      <Container>
        <div className="row">
          <div className="col">
            <Link to="/shop/desks">Desks</Link>
          </div>
          <div className="col">
            <Link to="/shop/accessories">Accessories</Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to="/shop/seating">Seating</Link>
          </div>
          <div className="col">
            <Link to="/shop/furniture">Furniture</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
