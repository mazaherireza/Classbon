import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        name="keySearch"
        id="key-search"
        placeholder="جستجوی فست‌فود ..."
        onChange={({ target }) => onSearch(target.value)}
      />
    </div>
  );
};

export default SearchBar;
