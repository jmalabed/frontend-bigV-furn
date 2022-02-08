import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <div key={idx} className="row">
          <div className="col">
            <img src={`${furn.imgUrl}`} alt="new" className="prodImg"></img>
          </div>
          <div className="col">
            <a href={`${furnCat}/${furn._id}`}>
              <p>{furn.title}</p>
            </a>
          </div>
          <div className="col">
            <p>{furn.price}</p>
          </div>
          <div className="col">
            <p>{furn.company}</p>
          </div>
          <div className="col">
            <p>{furn.finish}</p>
          </div>
          <div className="col">
            <button>Add to cart</button>
          </div>
          <hr></hr>
        </div>
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
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <p>Name</p>
          </div>
          <div className="col">
            <p>Cost</p>
          </div>
          <div className="col">
            <p>Company</p>
          </div>
          <div className="col">
            <p>Finish</p>
          </div>
          <div className="col"></div>
        </div>
        {dispFurn()}
      </div>
    </div>
  );
};
export default Furn;
