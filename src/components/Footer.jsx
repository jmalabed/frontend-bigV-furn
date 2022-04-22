import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const JJ = require("../img/JJs.png");
const Footer = (props) => {
  return (
    <footer className="footer pt-1 pb-1 d-flex flex-column">
      <div className="d-flex justify-content-end">
        <div className="w-50 d-flex justify-content-end">
          <img src={JJ} className="footer-logo" />
          <div className="footer-links ">
            <Link to="admin" className="footer-text">
              <p className="footer-text">Admin</p>
            </Link>
            <Link to="contact" className="footer-text">
              <p className="footer-text">Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
