import { useState, useEffect } from "react";
import CheckoutComponent from "../components/CheckoutComponent";
import { Button, Col, Row } from "react-bootstrap";

const Cart = (props) => {
  const [dispCheckout, setDispCheckout] = useState(true);

  const cost = () => {
    let totCost = null;
    for (let item of props.currentUser.cart) {
      totCost += item.price;
    }
    return totCost;
  };

  const removeFromCart = async (id) => {
    try {
      let updateCart = props.currentUser.cart.slice();
      updateCart.splice(
        updateCart.findIndex((ele) => ele._id === id),
        1
      );
      // console.log(updateCart);

      const updatedUser = {
        ...props.currentUser,
        cart: updateCart,
      };
      console.log(updatedUser);
      const configs = {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(updatedUser),
      };

      const updatedUserFetch = await fetch(
        `http://localhost:9000/auth/${props.currentUser._id}`,
        configs
      );
      const parsedUserUpdate = await updatedUserFetch.json();
      console.log(parsedUserUpdate);
      props.setCurrentUser(parsedUserUpdate);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleCheckout = () => {
    console.log(dispCheckout, "hit");
    setDispCheckout(!dispCheckout);
  };

  const dispCart = () => {
    if (props.currentUser.cart) {
      return props.currentUser.cart.map((item, i) => {
        return (
          <Row key={i}>
            <Col>
              <p>{item.title}</p>
            </Col>
            <Col>
              <p>{item.company}</p>
            </Col>
            <Col>
              <p>${item.price}</p>
            </Col>
            <Col>
              <Button onClick={() => removeFromCart(item._id)} variant="danger">
                X
              </Button>
            </Col>
          </Row>
        );
      });
    } else {
      return <p>cart is empty</p>;
    }
  };

  useEffect(() => {
    cost();
    dispCart();
  }, [props.currentUser]);

  return (
    <div>
      <h1>Cart</h1>
      {dispCart()}
      <Row>
        <Col></Col>
        <hr />
        <Col>Subtotal</Col>
        <Col>${cost()}</Col>
      </Row>

      <Button>
        <h3 onClick={toggleCheckout}>Ready to checkout?</h3>
      </Button>

      {dispCheckout && <CheckoutComponent />}
    </div>
  );
};
export default Cart;
