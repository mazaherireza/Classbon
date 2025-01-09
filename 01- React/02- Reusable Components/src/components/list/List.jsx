import "./List.css";
import Item from "../item/Item";

const List = (props) => {
  const { list, onRemoveItem } = props;

  return (
    <ul>
      {list.map((item) => {
        return (
          <Item key={item.id} item={item} onRemoveItem={onRemoveItem}></Item>
        );
      })}
    </ul>
  );
};

export default List;
