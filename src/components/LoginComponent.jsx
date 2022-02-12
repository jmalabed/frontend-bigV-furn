import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";

const LoginComponent = (props) => {
  const navigate = useNavigate();
  const initialState = { username: "", password: "" };
  const [input, setInput] = useState(initialState);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const createdUserToken = await props.loginUser(input);
      setInput(initialState);
      console.log(createdUserToken);
      if (createdUserToken.error) {
        alert(
          "Username and password combination does not exist within our database. Please try again."
        );
      } else if (createdUserToken) {
        navigate("/shop");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="">
      <Card className="p-3 d-flex align-items-center">
        <Form onSubmit={handleSubmit} className="inputBox">
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginComponent;
