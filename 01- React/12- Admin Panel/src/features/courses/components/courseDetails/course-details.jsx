import { httpInterceptedService } from "@core/http-service";
import { useLoaderData } from "react-router-dom";
import { convertEnNumToFa } from "@helpers/convertEnNumToFa";
import "./course-details.css";

const CourseDetails = () => {
  const {
    coverImageUrl,
    title,
    basePrice,
    courseCategory,
    courseLevel,
    description,
  } = useLoaderData();
  return (
    <div className="course-details-wrapper">
      <div className="img-wrapper">
        <img src={coverImageUrl} alt={title} />
      </div>

      <div className="text-wrapper">
        <div className="row">
          <h4>{title}</h4>
          <div>
            <p className="category">{courseCategory}</p>
            <p className="level">{courseLevel}</p>
          </div>
        </div>
        <p className="description">{description}</p>

        <p className="price">
          <span>قیمت:</span>
          <span>{convertEnNumToFa(basePrice.toLocaleString())}</span>
          <span>تومان</span>
        </p>
      </div>
    </div>
  );
};

export const courseDetailsLoader = async ({ params }) => {
  const { data } = await httpInterceptedService.get(
    `/Course/by-id/${params.id}`
  );
  return data;
};

export default CourseDetails;
