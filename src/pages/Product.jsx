import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const Product = (props) => {
  const [product, setProduct] = useState([]);

  const { furnId } = useParams();

  const getProduct = async (furnId) => {
    try {
      const foundProd = await fetch("http://localhost:9000/furn/" + furnId);
      const parsedProd = await foundProd.json();
      console.log(parsedProd);
      setProduct(parsedProd);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = async () => {
    try {
      console.log("Hit, adding " + product.title);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct(furnId);
    console.log(props.currentUser);
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col">
          <Card>
            <img src={`${product.imgUrl}`} className="prodImg" />
          </Card>
        </div>
        <div className="col">
          <div className="row">
            {props.isAuthenticated ? (
              <button onClick={addToCart}>Add to Cart</button>
            ) : (
              <></>
            )}
          </div>
          <div className="row">
            <div className="col">
              <h1>{product.title}</h1>
              <p>Company: {product.company}</p>
            </div>
            <div className="col">
              <h2>${product.price}</h2>
            </div>
          </div>
          <div className="col">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
