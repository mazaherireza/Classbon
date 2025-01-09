import "./Search.css";

const Search = (props) => {
  const { keySearch, onSearch } = props;

  const handleChange = ({ target }) => {
    onSearch(target.value);
  };

  return (
    <div>
      <label htmlFor="keySearch">Search Movie: </label>
      <input
        type="text"
        id="keySearch"
        value={keySearch}
        placeholder="Type to search"
        onChange={handleChange}
        autoFocus
      ></input>
    </div>
  );
};

export default Search;
