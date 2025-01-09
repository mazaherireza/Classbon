import "./Item.css";

const Item = (props) => {
  const {
    item: { title, id },
    onRemoveItem,
  } = props;

  const handleRemoveItem = () => {
    onRemoveItem(id);
  };
  return (
    <li className="list-item">
      <span>{title}</span>
      <span className="list-item-delete" onClick={handleRemoveItem}>
        Delete
      </span>
    </li>
  );
};

export default Item;
