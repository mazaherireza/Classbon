import "./List.css";
import Item from "../item/Item";

const List = (props) => {
  const { list } = props;

  return (
    <ul>
      {list.map((item) => {
        const { id, title } = item;
        return <Item key={id} title={title}></Item>;
      })}
    </ul>
  );
};

export default List;
