import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import deskImg from "../img/heightAdjustable.png";
import chairsImg from "../img/chairs.png";
import furnitureImg from "../img/furniture.png";
import accessoriesImg from "../img/accessoriesImg.png";

const Shop = (props) => {
  return (
    <div>
      <h1 className="text-center">Categories</h1>
      <Container>
        <div className="row">
          <div className="col">
            <Link to="/shop/desks">
              <Image src={deskImg} className="w-100" rounded />
              <p className="text-center">Height Adjustable Tables</p>
            </Link>
          </div>
          <div className="col">
            <Link to="/shop/accessories">
              <Image src={accessoriesImg} className="w-100" rounded />
              <p className="text-center">Accessories</p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to="/shop/seating">
              <Image src={chairsImg} className="w-100" rounded />
              <p className="text-center">Seating</p>
            </Link>
          </div>
          <div className="col">
            <Link to="/shop/furniture">
              <Image src={furnitureImg} className="w-100" rounded />
              <p className="text-center">Furniture</p>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
