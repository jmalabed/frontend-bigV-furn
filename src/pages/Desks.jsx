import { useState, useEffect } from "react";

const Desks = (props) => {
  const [desks, setDesks] = useState();
  //make get route to find all desks.
  const getDesks = async () => {
    try {
      const allDesks = await fetch("http://localhost:9000/furn/type/desks");
      const parsedDesks = await allDesks.json();
      setDesks(parsedDesks);
      console.log(parsedDesks);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = async () => {};

  const dispDesks = () => {
    if (desks?.length) {
      return desks.map((desk, idx) => (
        <div key={idx} className="row">
          <div className="col">
            <img src={`${desk.imgUrl}`} alt="new" className="prodImg"></img>
          </div>
          <div className="col">
            <a href={`${desk._id}`}>
              <p>{desk.title}</p>
            </a>
          </div>
          <div className="col">
            <p>{desk.price}</p>
          </div>
          <div className="col">
            <p>{desk.company}</p>
          </div>
          <div className="col">
            <p>{desk.finish}</p>
          </div>
          <div className="col">
            <button>Add to cart</button>
          </div>
          <hr></hr>
        </div>
      ));
    } else
      <div>
        <p>No desks</p>
      </div>;
  };

  useEffect(() => {
    getDesks();
  }, []);

  useEffect(() => {
    dispDesks();
  }, [desks]);
  return (
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
      {dispDesks()}
    </div>
  );
};
export default Desks;
