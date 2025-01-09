import "./App.css";
import { movies as list } from "./constants/consts";
import useStorageState from "./hooks/useStorageState";
import InputWithLabel from "./components/common/inputWithLabel/InputWithLabel";
import List from "./components/list/List";
import { useState, useEffect } from "react";

function App() {
  const [keySearch, setKeySearch] = useStorageState("keySearch", "");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = (val) => {
    setKeySearch(val);
  };

  const fetchAsyncData = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const num = Math.random();
        num >= 0.5 ? resolve(list) : reject("Error");
      }, 2500);
    });

  useEffect(() => {
    setIsLoading(true);
    fetchAsyncData()
      .then((result) => {
        setMovies(result);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const handleRemoveMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const filteredMovies = movies.filter(({ title }) =>
    title.toLowerCase().includes(keySearch.toLowerCase())
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

      {isLoading ? (
        <p className="loading">Loading ...</p>
      ) : (
        <List list={filteredMovies} onRemoveItem={handleRemoveMovie}></List>
      )}
      {isError && <p className="error">Error, try later.</p>}
    </div>
  );
}

export default App;
