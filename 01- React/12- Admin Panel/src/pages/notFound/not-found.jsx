import { Link } from "react-router-dom";
import "./not-found.css";

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <h2>404</h2>
      <h4>صفحه موردنظر یافت نشد.</h4>
      <Link to="/">بازگشت به صفحه اصلی</Link>
    </div>
  );
};

export default NotFound;
