import { Button, Form } from "react-bootstrap";

const CheckoutComponent = (props) => {
  let qbURI = "https://sandbox.api.intuit.com";
  const ccRegX = new RegExp("[0-9/s]{13,19}");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("checkout!");
  };

  // USE TOKEN TO MAKE CC CHARGE
  // POST TOKEN
  const makeToken = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "Application-json",
        },
      };
      const createdToken = await fetch(
        `${qbURI}/quickbooks/v4/payments/tokens`,
        configs
      );
      const parsedToken = await createdToken.json();
      console.log(parsedToken);
    } catch (err) {
      console.log(err);
    }
  };
  const makeCardFromToken = async (data) => {
    try {
      const configs = {
        method: "POST",
        headers: {
          "Content Type": "Application-json",
        },
        body: JSON.stringify(data),
      };
      const card = await fetch(
        `${qbURI}/quickbooks/v4/customers/<id>/cards/createFromToken`,
        configs
      );
      const parsedCard = await card.json();
      console.log(parsedCard);
    } catch (err) {
      console.log(err);
    }
  };
  const makeCharge = async (token) => {
    try {
      const configs = {
        method: "POST",
        headers: {
          "Content-Type": "Application-json",
        },
        body: JSON.stringify(token),
      };
      const charge = await fetch(
        `${qbURI}/quickbooks/v4/customers/<id>/cards/createFromToken`,
        configs
      );
      const parsedCharge = await charge.json();
      console.log(parsedCharge);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="cc">
          <Form.Label>Credit Card:</Form.Label>
          <Form.Control type="text" placeholder="Credit Card Number " />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="email" />
        </Form.Group>
        <Form.Group controlId="shipping-address">
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control type="text" placeholder="Shipping Address" />
        </Form.Group>
        <Form.Group controlId="billing-address">
          <Form.Label>Billing Address</Form.Label>
          <Form.Control type="text" placeholder="Billing Address" />
        </Form.Group>
        <Button type="submit">Checkout!</Button>
      </Form>
    </div>
  );
};

export default CheckoutComponent;
