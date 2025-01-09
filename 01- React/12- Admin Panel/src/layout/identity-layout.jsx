import Logo from "@assets/images/Logo.svg";
import "./indentity-layout.css";
import { Outlet } from "react-router-dom";

const IdentityLayout = () => {
  return (
    <div className="identity-layout-wrapper">
      <img src={Logo} alt="Logo" className="logo" />
      <h3>پلتفرم آموزش آنلاین</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default IdentityLayout;
