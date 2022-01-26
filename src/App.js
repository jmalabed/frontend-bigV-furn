import "./App.css";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

const App = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser(user, (user[e.target.name] = e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit hit");
  };

  const loggingIn = async () => {
    try {
    } catch (err) {}
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
      </Routes>
    </Container>
  );
};

export default App;
