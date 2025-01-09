import useAxios from "../../hooks/useAxios";
import "./CategoryList.css";
import SearchBar from "../SearchBar/SearchBar";

const API_ENDPOINT = "/FoodCategory/categories";

const CategoryList = ({ onChangeCategory, onSearch }) => {
  const [categories, ,] = useAxios({
    url: API_ENDPOINT,
  });
  const handleClick = (id) => {
    onChangeCategory(id);
  };

  const renderContent = () => {
    return (
      <ul>
        <li className="nav-item" onClick={() => handleClick("")}>
          همه دسته‌بندی‌ها
        </li>
        {categories &&
          categories.map((category) => (
            <li
              className="nav-item"
              key={category.id}
              onClick={() => handleClick(category.id)}
            >
              {category.name}
            </li>
          ))}
      </ul>
    );
  };
  return (
    <nav className="category-list-wrapper">
      <div className="container">
        {renderContent()}
        <SearchBar onSearch={onSearch}></SearchBar>
      </div>
    </nav>
  );
};

export default CategoryList;
