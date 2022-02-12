import { Card, Container } from "react-bootstrap";

const About = (props) => {
  return (
    <Container>
      <Card>
        <h1 className="m-3">About</h1>
        <p className="m-3">
          Serving the San Francisco Bay Area for generations, JJ's offers a
          variety of office furniture on an accessible platform. It was built
          for customers to place orders and expedite their service with our
          business partners. Browse through available products and place an
          order to have our sales team fulfill your order.
        </p>
      </Card>
    </Container>
  );
};
export default About;
