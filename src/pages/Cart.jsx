import { useState, useEffect } from "react";
import CheckoutComponent from "../components/CheckoutComponent";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Cart = (props) => {
  const [dispCheckout, setDispCheckout] = useState(false);

  const cost = () => {
    let totCost = null;
    for (let item of props.currentUser.cart) {
      totCost += item.price * item.qty;
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
    setDispCheckout(!dispCheckout);
  };

  const dispCart = () => {
    if (props.currentUser.cart.length >= 1) {
      return props.currentUser.cart.map((item, i) => {
        return (
          <Row key={i}>
            <Col>
              <p>{item.title}</p>
            </Col>
            <Col>
              <Col>
                <Row>
                  <p>Qty:</p>
                </Row>
                <Row>
                  <p>{item.qty}</p>
                </Row>
              </Col>
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
      return (
        <div className="d-flex justify-content-center">
          <h2 className="mb-3">Cart is empty!</h2>
        </div>
      );
    }
  };

  const showSubtotal = () => {
    if (props.currentUser.cart.length >= 1) {
      return (
        <>
          <Row>
            <Col> </Col>
            <hr />
            <Col></Col>
            <Col>Subtotal: ${cost()}</Col>
          </Row>
          <Button onClick={toggleCheckout}>
            <h3>Ready to checkout?</h3>
          </Button>
        </>
      );
    } else {
      return <></>;
    }
  };

  const showCheckout = () => {
    if (dispCheckout) {
      return <CheckoutComponent />;
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    cost();
    dispCart();
  }, [props.currentUser]);

  return (
    <div>
      <h1>Cart</h1>
      <Card>{dispCart()}</Card>
      {showSubtotal()}

      {showCheckout()}
    </div>
  );
};
export default Cart;
