const Item = (props) => {
  const {
    item: { title, id },
    onRemoveItem,
  } = props;

  const handleRemoveItem = () => {
    onRemoveItem(id);
  };
  return <li onClick={handleRemoveItem}>{title}</li>;
};

export default Item;
