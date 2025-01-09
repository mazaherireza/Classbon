import "./item.css";

const Item = ({ name, imageUrl }) => {
  return (
    <div className="item-wrapper">
      <div className="item-img">
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  );
};

export default Item;
