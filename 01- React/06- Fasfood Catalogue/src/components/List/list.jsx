import "./list.css";
import Item from "../Item/item";

const List = ({ list }) => {
  let delay = 0;
  return (
    <div className="list-wrapper container">
      {list.map((item) => {
        delay += 0.1;
        return <Item key={item.id} {...item} delay={delay}></Item>;
      })}
    </div>
  );
};

export default List;
