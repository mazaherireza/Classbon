import "./cart.css";
import List from "../List/list";
import { useCartContext } from "../../context";
import { convertEnNumToFa } from "../../helpers/convertEnNumToFa";

const Cart = () => {
  const { cart, clearCart, total } = useCartContext();
  return (
    <div className="cart-wrapper container">
      <List></List>
      <div className="sum">
        <h4>مجموع خرید:</h4>
        <p>{convertEnNumToFa(total.toLocaleString())} تومان</p>
        {cart.length !== 0 && (
          <button className="delete-all" onClick={() => clearCart()}>
            حذف همه آیتم‌ها
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
