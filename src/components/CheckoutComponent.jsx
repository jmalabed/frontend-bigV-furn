import { Button, Form } from "react-bootstrap";

const CheckoutComponent = (props) => {
  const ccRegX = new RegExp("[0-9/s]{13,19}");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("checkout!");
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
