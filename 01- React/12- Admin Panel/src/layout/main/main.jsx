import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./main.css";

const MainLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, []);

  return (
    <div className="main-wrapper">
      <div className="container">
        <Sidebar></Sidebar>
        <main className="main">
          <Outlet />
          <Footer></Footer>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
