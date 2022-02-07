import About from "../pages/About";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Desks from "../pages/Desks";

import { Routes, Route } from "react-router-dom";

const RoutesComponent = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/desks" element={<Desks />} />
        <Route path="login" element={<Login loginUser={props.loginUser} />} />
        <Route
          path="register"
          element={<Register registerUser={props.registerUser} />}
        />
      </Routes>
    </>
  );
};

export default RoutesComponent;
