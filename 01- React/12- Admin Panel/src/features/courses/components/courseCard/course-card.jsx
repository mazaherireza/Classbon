import { convertEnNumToFa } from "@helpers/convertEnNumToFa";
import { Link } from "react-router-dom";
import "./course-card.css";

const CourseCard = ({ id, coverImageUrl, title, duration }) => {
  return (
    <Link className="course-card-wrapper" to={`courses/${id}`}>
      <div className="img-wrapper">
        <img src={coverImageUrl} alt={title} />
      </div>
      <div className="text-wrapper">
        <div>
          <h5>{title}</h5>
          <h6>{convertEnNumToFa(duration)} ساعت</h6>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
