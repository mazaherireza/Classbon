import "./header.css";
import { useThemeContext } from "../../context";

const Header = () => {
  const { darkMode, setDarkMode } = useThemeContext();

  const changeTheme = () => setDarkMode(!darkMode);
  return (
    <header className={`header-wrapper container ${darkMode ? "bg-dark" : "bg-light"}`}>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
        </ul>
        <button onClick={changeTheme}>{darkMode ? "Light" : "Dark"}</button>
      </nav>
    </header>
  );
};

export default Header;
