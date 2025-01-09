import { useAppContext } from "@contexts/app/app-context";
import "./header.css";

const Header = () => {
  const { theme, changeTheme } = useAppContext();

  return (
    <header>
      <div className="container">
        <p>Header</p>
        <button onClick={() => changeTheme(theme == "dark" ? "light" : "dark")}>
          {theme == "dark" ? "Dark" : "Light"}
        </button>
      </div>
    </header>
  );
};

export default Header;
