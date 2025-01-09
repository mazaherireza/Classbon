import { useCartContext } from "../../context";
import Item from "../Item/item";
import "./list.css";

const List = () => {
  const { cart } = useCartContext();

  const renderContent = () => {
    if (cart.length) {
      return cart.map((cartItem) => (
        <Item key={cartItem.id} {...cartItem}></Item>
      ));
    } else {
      return (
        <p style={{ textAlign: "center", marginBottom: "1rem" }}>
          سبد خرید خالی است!
        </p>
      );
    }
  };
  return <div className="list-wrapper">{renderContent()}</div>;
};

export default List;
