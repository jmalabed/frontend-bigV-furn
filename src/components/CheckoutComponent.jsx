import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CheckoutComponent = (props) => {
  const [customer, setCustomer] = useState({
    FullyQualifiedName: "King Groceries",
    PrimaryEmailAddr: {
      Address: "jdrew@myemail.com",
    },
    DisplayName: "King's Groceries",
    Suffix: "Jr",
    Title: "Mr",
    MiddleName: "B",
    Notes: "Here are other details.",
    FamilyName: "King",
    PrimaryPhone: {
      FreeFormNumber: "(555) 555-5555",
    },
    CompanyName: "King Groceries",
    BillAddr: {
      CountrySubDivisionCode: "CA",
      City: "Mountain View",
      PostalCode: "94042",
      Line1: "123 Main Street",
      Country: "USA",
    },
    GivenName: "James",
  });
  const [billing, setBilling] = useState({});

  let qbURI = "https://sandbox.api.intuit.com";
  const ccRegX = new RegExp("[0-9/s]{13,19}");

  const handleChange = (e) => {
    console.log("hit", e);
    console.log(e.target.id, e.target.value, e.target.name);
    setCustomer({ ...customer, [e.target.id]: e.target.value });
  };

  const handleBillingChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(customer);
    console.log("checkout!");
    makeCustomer();
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

  const makeCustomer = async () => {
    try {
      console.log("hi");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Jane"
            onChange={handleChange}
            name="GivenName"
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Doe" />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="(###)-###-####"
            onChange={handleChange}
            name="FamilyName"
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="doejane@gmail.com"
            onChange={handleChange}
            name="PrimaryEmailAddr"
          />
        </Form.Group>
        <Form.Group controlId="billing-address1">
          <Form.Label>Billing Address:</Form.Label>
          <Form.Control type="text" placeholder="1111 Furniture Lane" />
        </Form.Group>
        <div>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="San Jose" />
          </Form.Group>
          <Form.Group controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="CA" />
          </Form.Group>
        </div>
        <Button type="submit" variant="primary">
          Proceed to checkout
        </Button>
      </Form>
    </div>
  );
};

export default CheckoutComponent;
