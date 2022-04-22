import ShopComponent from "../components/ShopComponent";
import BargainBinComponent from "../components/BargainBinComponent";

import { Container } from "react-bootstrap";
import office from "../img/home-short.png";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col">
            <p className="d-flex justify-content-center text-center">
              Working from home? We've got you covered.
            </p>
          </div>
          <div className="col">
            <p className="d-flex justify-content-center text-center">OR</p>
          </div>
          <div className="col">
            <p className="d-flex justify-content-center text-center">
              Complete your office with our great selection of products.
            </p>
          </div>
        </div>
      </Container>
      <div className="row">
        <img src={office} alt="Office furniture" />
      </div>

      <div className="mx-5 mt-3">
        <h2 className="text-center">All Products</h2>
        <ShopComponent />
        <BargainBinComponent />
      </div>
    </div>
  );
};

export default Home;
