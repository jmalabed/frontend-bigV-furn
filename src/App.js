import "./App.css";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { setUserToken, clearUserToken } from "./utils/authToken";

const App = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
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

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginUser = async(data) => {
    try {
      const configs = {
        method:"POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type":"application/json",
        },
      }
      const loggedUser = await fetch('https://localhost:9000/auth/login',configs)
      const parsedUser = await loggedUser.json();
      setUserToken(parsedUser.)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="login"
          element={
            <Login handleChange={handleChange} handleSubmit={handleSubmit} />
          }
        />
        <Route
          path="register"
          element={<Register registerUser={registerUser} />}
        />
      </Routes>
    </Container>
  );
};

export default App;
