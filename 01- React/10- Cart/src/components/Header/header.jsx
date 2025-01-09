import "./header.css";
import { useCartContext } from "../../context";
import { convertEnNumToFa } from "../../helpers/convertEnNumToFa";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const { cart } = useCartContext();

  return (
    <div className="header-wrapper">
      <div className="container">
        <div>
          <h3>سبد خرید</h3>
          {cart.length !== 0 && (
            <p className="icon">
              <FiShoppingCart style={{ fontSize: "1.5rem" }}></FiShoppingCart>
              <span className="count">{convertEnNumToFa(cart.length)}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
