import "./App.css";
import { movies as list } from "./constants/consts";
import useStorageState from "./hooks/useStorageState";
import InputWithLabel from "./components/common/inputWithLabel/InputWithLabel";
import List from "./components/list/List";
import { useState } from "react";

function App() {
  const [keySearch, setKeySearch] = useStorageState("keySearch", "");
  const [movies, setMovies] = useState(list);

  const handleSearch = (val) => {
    setKeySearch(val);
  };

  const handleRemoveMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(keySearch.toLowerCase())
  );

  return (
    <div>
      <InputWithLabel
        label="Search Movie: "
        _id="keySearch"
        value={keySearch}
        placeholder="Type to search"
        onInputChange={handleSearch}
        isFocused
      ></InputWithLabel>
      <List list={filteredMovies} onRemoveItem={handleRemoveMovie}></List>
    </div>
  );
}

export default App;
