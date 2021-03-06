import About from "../pages/About";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Desks from "../pages/Desks";
import Furn from "../pages/Furn";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Admin from "../pages/Admin";
import AdminManage from "../pages/AdminManage";
import NotFound from "../pages/NotFound";
import { Routes, Route } from "react-router-dom";

const RoutesComponent = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:furnCat" element={<Furn />} />
        <Route
          path="shop/:furnCat/:furnId"
          element={
            <Product
              currentUser={props.currentUser}
              isAuthenticated={props.isAuthenticated}
              setCurrentUser={props.setCurrentUser}
            />
          }
        />
        <Route path="login" element={<Login loginUser={props.loginUser} />} />
        <Route
          path="register"
          element={<Register registerUser={props.registerUser} />}
        />
        <Route
          path="cart"
          element={
            <Cart
              currentUser={props.currentUser}
              setCurrentUser={props.setCurrentUser}
            />
          }
        />
        <Route
          path="admin"
          element={
            <Admin
              loginAdmin={props.loginAdmin}
              registerAdmin={props.registerAdmin}
            />
          }
        />
        <Route path="admin/manage" element={<AdminManage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
