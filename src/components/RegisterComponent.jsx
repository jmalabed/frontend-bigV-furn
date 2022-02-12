import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";

const RegisterComponent = (props) => {
  const navigate = useNavigate();
  const initialState = { username: "", password: "" };
  const [input, setInput] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdUserToken = await props.registerUser(input);
    setInput(initialState);
    if (createdUserToken) {
      navigate("/shop");
    } else {
      navigate("/register");
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  return (
    <Container>
      <Card className="p-3 d-flex align-items-center">
        <Form onSubmit={handleSubmit} className="inputBox">
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
export default RegisterComponent;
