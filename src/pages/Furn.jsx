import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

const Furn = (props) => {
  const [furn, setFurn] = useState();
  let { furnCat } = useParams();
  //make get route to find all desks.
  const getFurn = async () => {
    try {
      console.log(furnCat);
      const allFurn = await fetch(`http://localhost:9000/furn/type/${furnCat}`);
      const parsedFurn = await allFurn.json();
      setFurn(parsedFurn);
      console.log(parsedFurn);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = async () => {};

  const dispFurn = () => {
    if (furn?.length) {
      return furn.map((furn, idx) => (
        <Row key={idx}>
          <Col sm={2}>
            <img src={`${furn.imgUrl}`} alt="new" className="prodImg"></img>
          </Col>
          <Col sm={2}>
            <Link to={`/shop/${furnCat}/${furn._id}`}>
              <p>{furn.title}</p>
            </Link>
          </Col>
          <Col sm={2}>
            <p>{furn.price}</p>
          </Col>
          <Col sm={2}>
            <p>{furn.company}</p>
          </Col>
          <Col sm={2}>
            <p>{furn.finish}</p>
          </Col>
          <hr></hr>
        </Row>
      ));
    } else
      <div>
        <p>No category picked</p>
      </div>;
  };

  useEffect(() => {
    getFurn();
  }, []);

  useEffect(() => {
    dispFurn();
  }, [furn]);
  return (
    <div>
      <h1>
        {furnCat.charAt(0).toUpperCase() + furnCat.slice(1, furnCat.length)}
      </h1>
      <div>
        <Row>
          <Col sm={2}></Col>
          <Col sm={2}>
            <p>Name</p>
          </Col>
          <Col sm={2}>
            <p>Cost</p>
          </Col>
          <Col sm={2}>
            <p>Company</p>
          </Col>
          <Col sm={2}>
            <p>Finish</p>
          </Col>
          <Col></Col>
        </Row>
        {dispFurn()}
      </div>
    </div>
  );
};
export default Furn;
