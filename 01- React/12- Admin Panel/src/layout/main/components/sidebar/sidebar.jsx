import logo from "@assets/images/Logo.svg";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar-wrapper">
      <img src={logo} alt="Logo" />
      <h4>پلت‌فرم آموزش آنلاین</h4>
      <ul>
        <h5>مدیریت دوره‌ها</h5>
        <li>
          <Link to={"/"}>همه دوره‌ها</Link>
        </li>

        <li>
          <Link to={"/course-categories"}>دسته‌بندی دوره‌ها</Link>
        </li>

        <li>
          <Link>تخفیف دوره‌ها</Link>
        </li>

        <h5>مدیریت کاربران</h5>
        <li>
          <Link>مدیریت مدرس‌ها</Link>
        </li>

        <li>
          <Link>مدیریت دانشجوها</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
