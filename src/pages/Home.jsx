import Navbar from "../components/navbar";
import { Container } from "react-bootstrap";
import office from "../img/officeFront.png";

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
        <img src={office} />
      </div>
    </div>
  );
};

export default Home;
