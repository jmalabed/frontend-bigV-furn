import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    getProduct(furnId);
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col">
          <h1>{product.title}</h1>
          <p>{product.company}</p>
        </div>
        <div className="col">
          <h2>${product.price}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={`${product.imgUrl}`} className="prodImg" />
        </div>
        <div className="col">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
