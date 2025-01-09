import "./item.css";
import { FiShoppingCart } from "react-icons/fi";

const Item = ({ name, price, ingredients, imageUrl, delay }) => {
  return (
    <div
      className="item-wrapper horizontal-fade-in"
      style={{ animationDelay: delay + "s" }}
    >
      <div className="item-img">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="item-content">
        <h5>{name}</h5>
        <p>{ingredients}</p>
        <span className="item-price">قیمت: {price.toLocaleString()} تومان</span>
      </div>
      <button className="item-btn">
        <span>افزودن به سبد خرید </span>
        <FiShoppingCart></FiShoppingCart>
      </button>

      <div className="extra"></div>
    </div>
  );
};

export default Item;
