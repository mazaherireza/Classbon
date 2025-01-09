import logo from "@assets/images/Logo.svg";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const classNameFunc = ({ isActive }) => (isActive ? "active-link" : "");
  
  return (
    <nav className="sidebar-wrapper">
      <img src={logo} alt="Logo" />
      <h3>پلت‌فرم آموزش آنلاین</h3>
      <ul>
        <h4>مدیریت دوره‌ها</h4>
        <li>
          <NavLink to="/" className={classNameFunc}>
            همه دوره‌ها
          </NavLink>
        </li>

        <li>
          <NavLink to="/course-categories" className={classNameFunc}>
            دسته‌بندی دوره‌ها
          </NavLink>
        </li>

        <li>
          <NavLink>تخفیف دوره‌ها</NavLink>
        </li>

        <h4>مدیریت کاربران</h4>
        <li>
          <NavLink>مدیریت مدرس‌ها</NavLink>
        </li>

        <li>
          <NavLink>مدیریت دانشجوها</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
