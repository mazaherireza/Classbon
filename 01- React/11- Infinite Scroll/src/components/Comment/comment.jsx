import "./comment.css";
import { convertEnNumToFa } from "../../helpers/convertEnNumToFa";

const Comment = ({ name, imageUrl, description, date }) => {
  return (
    <div className="comment-wrapper">
      <div>
        <div className="img-wrapper">
          <img src={imageUrl} alt={name} />
        </div>
        <p className="name">{name}</p>
      </div>

      <div>
        <p className="description">{description}</p>
        <p className="date">{convertEnNumToFa(date)}</p>
      </div>
    </div>
  );
};

export default Comment;
