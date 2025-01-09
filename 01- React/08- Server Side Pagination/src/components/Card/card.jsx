import "./card.css";

const Card = ({ imageUrl, name, skills, mobile, email }) => {
  return (
    <div className="card-wrapper">
      <div className="img-wrapper">
        <img src={imageUrl} alt={name} />
      </div>
      <h4 className="name">{name}</h4>
      <p className="skills">{skills}</p>
      <p className="mobile">{mobile}</p>
      <p className="email">{email}</p>
    </div>
  );
};

export default Card;
