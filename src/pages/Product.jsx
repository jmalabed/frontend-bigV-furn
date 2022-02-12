import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

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
      const updatedItems = props.currentUser.cart.push(product);
      const updatedCartData = {
        ...props.currentUser,
        [props.currentUser.cart]: updatedItems,
      };
      const id = props.currentUser._id;
      const configs = {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(updatedCartData),
      };
      const updatedCart = await fetch(
        `http://localhost:9000/auth/${id}`,
        configs
      );
      const parsedCart = await updatedCart.json();
      console.log(parsedCart);
      props.setCurrentUser(parsedCart);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct(furnId);
    console.log(props.currentUser);
  }, []);

  return (
    <div className="m-4">
      <div className="row">
        <div className="col">
          <Card>
            <img src={`${product.imgUrl}`} className="prodImg" />
          </Card>
        </div>
        <div className="col">
          <div className="row">
            {props.isAuthenticated ? (
              <Button onClick={addToCart}>Add to Cart</Button>
            ) : (
              <></>
            )}
          </div>
          <div className="row">
            <div className="col">
              <h1>{product.title}</h1>
              <p>By: {product.company}</p>
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
