import "./App.css";
import RoutesComponent from "./components/RoutesComponent";
import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { setUserToken, clearUserToken } from "./utils/authToken";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const registerUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const newUser = await fetch(
        "http://localhost:9000/auth/register",
        configs
      );
      const parsedUser = await newUser.json();
      setUserToken(parsedUser.token);
      setCurrentUser(parsedUser.user);
      setIsAuthenticated(parsedUser.isLoggedIn);
      return parsedUser;
    } catch (err) {
      console.log(err);
      clearUserToken();
      setIsAuthenticated(false);
    }
  };

  const loginUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const loggedUser = await fetch(
        "http://localhost:9000/auth/login",
        configs
      );
      const parsedUser = await loggedUser.json();
      setUserToken(parsedUser.token);
      setCurrentUser(parsedUser.user);
      setIsAuthenticated(parsedUser.isLoggedIn);
      return parsedUser;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <RoutesComponent
        registerUser={registerUser}
        loginUser={loginUser}
        currentUser={currentUser}
        isAuthenticated={isAuthenticated}
      />
    </Container>
  );
};

export default App;
