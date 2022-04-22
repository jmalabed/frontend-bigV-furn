import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const DevPlayground = (props) => {
  const [oaToken, setOAToken] = useState({});
  const qbURI = `https://sandbox.api.intuit.com`;

  const card = {
    updated: "2015-03-25T22:24:33Z",
    name: "Test User",
    created: "2015-03-25T22:24:33Z",
    default: false,
    number: "4112344112344113",
    expMonth: "12",
    address: {
      postalCode: "44112",
      city: "Richmond",
      region: "VA",
      streetAddress: "1245 Hana Rd",
      country: "US",
    },
    expYear: "2024",
    isBusiness: false,
    id: "101101015602106732027893",
  };

  const sampleCharge = {
    currency: "USD",
    amount: "10.55",
    context: {
      mobile: "false",
      isEcommerce: "true",
    },
    card: {
      name: "emulate=0",
      number: "4111111111111111",
      expMonth: "02",
      address: {
        postalCode: "94086",
        country: "US",
        region: "CA",
        streetAddress: "1130 Kifer Rd",
        city: "Sunnyvale",
      },
      expYear: "2022",
      cvc: "123",
    },
  };
  // USE TOKEN TO MAKE CC CHARGE
  // POST TOKEN
  // ecommerce API
  const makeToken = async (data) => {
    try {
      console.log(data);
      const configs = {
        method: "POST",
        body: JSON.stringify({ card: data }),
        headers: {
          "Content-Type": "Application/json",
        },
      };
      const createdToken = await fetch(
        `https://sandbox.api.intuit.com/quickbooks/v4/payments/tokens`,
        configs
      );
      const parsedToken = await createdToken.json();
      console.log(parsedToken);
      setOAToken(parsedToken);
      const connect = window.open("http://localhost:9000/authUri");
    } catch (err) {
      console.log(err);
    }
  };
  const makeCardFromToken = async (data) => {
    try {
      const configs = {
        method: "POST",
        headers: {
          "Content Type": "Application/json",
          "request-Id": uuidv4(),
        },
        body: JSON.stringify({ value: data }),
      };
      const card = await fetch(
        `https://sandbox.api.intuit.com/quickbooks/v4/customers/<id>/cards/createFromToken`, // need ID for customer to assign card to them.
        configs
      );
      const parsedCard = await card.json();
      console.log(parsedCard);
    } catch (err) {
      console.log(err);
    }
  };
  const makeCharge = async () => {
    try {
      const reqBody = {
        token: oaToken,
        context: { isMobile: false, isEcommerce: true },
        amount: 20,
        currency: "USD",
      };
      const configs = {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          "request-Id": uuidv4(),
          "Access-Control-Allow-Origin": `*`,
        },
        body: JSON.stringify(sampleCharge),
        mode: "no-cors",
      };
      console.log(reqBody, configs);
      const charge = await fetch(
        `https://sandbox.api.intuit.com/quickbooks/v4/payments/charges`,
        configs
      );
      const parsedCharge = await charge.json();
      console.log(parsedCharge);
    } catch (err) {
      console.log(err);
    }
  };
  const getAuthUri = async () => {
    try {
      const authUri = await fetch("http://localhost:9000/authUri");
      const parseUri = await authUri.json();
      console.log(parseUri);
    } catch (e) {
      console.log(e);
    }
  };

  const sendEmail = async () => {
    try {
      const configs = {
        method: "POST",
      };
      const postEmail = await fetch("http://localhost:9000/sendgrid/", configs);
    } catch (e) {
      console.log(e);
    }
  };

  const makeInvoice = async () => {};
  return (
    <div>
      <h1>Welcome to the dev. playground</h1>
      <p>test your api calls here!</p>
      <button onClick={() => makeToken(card)}>makeToken</button>
      <button onClick={() => makeCardFromToken(oaToken)}>
        makeCardFromToken
      </button>
      <button onClick={makeCharge}>makeCharge</button>
      <button onClick={getAuthUri}>getAuthUri</button>
      <button onClick={sendEmail}>send email</button>
    </div>
  );
};

export default DevPlayground;
