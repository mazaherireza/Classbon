import "./list.css";
import Card from "../Card/card";

const List = ({ list }) => {
  return (
    <div className="list-wrapper">
      {list.map(({ id, ...item }) => (
        <Card key={id} {...item}></Card>
      ))}
    </div>
  );
};

export default List;
