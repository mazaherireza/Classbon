import "./item.css";
import { useCartContext } from "../../context";
import { convertEnNumToFa } from "../../helpers/convertEnNumToFa";

const Item = ({ id, title, price, img, quantity }) => {
  const { remove, changeQuantity } = useCartContext();

  return (
    <div className="item-wrapper">
      <div className="item-info">
        <img src={img} alt={title} />
        <div>
          <h5 className="title">{title}</h5>
          <span className="price">
            {convertEnNumToFa(price.toLocaleString())} تومان
          </span>
        </div>
      </div>

      <div className="item-action">
        <label htmlFor={`quantity-${id}`}>تعداد: </label>
        <input
          id={`quantity-${id}`}
          type="number"
          value={quantity}
          onChange={({ target }) => changeQuantity(id, +target.value)}
        />
        <button onClick={() => remove(id)}>حذف</button>
      </div>
    </div>
  );
};

export default Item;
