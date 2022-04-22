import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import deskImg from "../img/heightAdjustable.png";
import chairsImg from "../img/chairs.png";
import furnitureImg from "../img/furniture.png";
import accessoriesImg from "../img/accessoriesImg.png";

const ShopComponent = (props) => {
  const items = [
    { img: deskImg, title: "Height Adjustable Tables" },
    { img: chairsImg, title: "Seating" },
    { img: furnitureImg, title: "Furniture" },
    { img: accessoriesImg, title: "Accessories" },
  ];

  const categories = items.map((item, idx) => {
    return (
      <div className="col" key={idx}>
        <Link to="/shop/desks" className="">
          <div className="container px-0">
            <Image src={item.img} className="image" alt={item.title} rounded />
            <div className="overlay">
              <div className="text">{item.title}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="row my-4 scrolling">{categories}</div>;
};

export default ShopComponent;
