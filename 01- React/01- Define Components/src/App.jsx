import "./App.css";
import { movies } from "./constants/consts";
import { useState } from "react";
import Search from "./components/search/Search";
import List from "./components/list/List";

function App() {
  const [keySearch, setKeySearch] = useState("");

  const handleSearch = (val) => {
    setKeySearch(val);
  };

  const filteredMovies = movies.filter(({ title }) =>
    title.toLowerCase().includes(keySearch.toLowerCase())
  );

  return (
    <div>
      <Search keySearch={keySearch} onSearch={handleSearch}></Search>
      <List list={filteredMovies}></List>
    </div>
  );
}

export default App;
