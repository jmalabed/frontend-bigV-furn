import { useState, useEffect } from "react";

const Cart = (props) => {
  const cost = () => {
    let totCost = null;
    for (let item of props.currentUser.cart) {
      totCost += item.price;
    }
    return totCost;
  };

  useEffect(() => {
    cost();
  }, [props.currentUser]);

  return (
    <div>
      <h1>Cart</h1>
      {props.currentUser.cart.map((item, i) => {
        return (
          <div key={i} className="row">
            <div className="col">
              <p>{item.title}</p>
            </div>
            <div className="col">
              <p>{item.company}</p>
            </div>
            <div className="col">
              <p>${item.price}</p>
            </div>
          </div>
        );
      })}
      <div className="row">
        <div className="col"></div>
        <div className="col">Subtotal</div>
        <div className="col">${cost()}</div>
      </div>
    </div>
  );
};
export default Cart;
