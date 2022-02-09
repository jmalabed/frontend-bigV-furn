import Navbar from "../components/navbar";

const Home = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <p className="d-flex justify-content-center text-center">
            Working from home? We've got you covered
          </p>
        </div>
        <div className="col">
          <p className="d-flex justify-content-center text-center">OR</p>
        </div>
        <div className="col">
          <p className="d-flex justify-content-center text-center">
            Complete your office with our great selection of products
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
