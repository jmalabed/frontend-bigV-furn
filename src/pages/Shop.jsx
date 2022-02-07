import { Container } from "react-bootstrap";
const Shop = (props) => {
  return (
    <div>
      <h1>Categories</h1>
      <Container>
        <div className="row">
          <div className="col">
            <a href="/shop/desks">Desks</a>
          </div>
          <div className="col">
            <a href="/shop/accessories">Accessories</a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a href="/shop/seating">Seating</a>
          </div>
          <div className="col">
            <a href="/shop/furniture">Furniture</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
