import "./item.css";

const Item = ({ delay }) => {
  return (
    <div
      className="item-wrapper horizontal-fade-in"
      style={{ animationDelay: delay + "s" }}
    ></div>
  );
};

export default Item;
