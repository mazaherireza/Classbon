import "./App.css";
import { movies as list } from "./constants/consts";
import useStorageState from "./hooks/useStorageState";
import InputWithLabel from "./components/common/inputWithLabel/InputWithLabel";
import List from "./components/list/List";
import { useEffect, useReducer } from "react";
import { storeReducer } from "./reducer";

function App() {
  const [keySearch, setKeySearch] = useStorageState("keySearch", "");
  const [store, dispatchStore] = useReducer(storeReducer, {
    movies: [],
    isLoading: false,
    isError: false,
  });

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
    dispatchStore({ type: "FETCH_MOVIES_INIT", payload: {} });
    fetchAsyncData()
      .then((result) => {
        dispatchStore({ type: "FETCH_MOVIES_SUCCESS", payload: result });
      })
      .catch((error) => {
        dispatchStore({ type: "FETCH_MOVIES_FAILURE", payload: error });
      });
  }, []);

  const handleRemoveMovie = (id) => {
    dispatchStore({
      type: "REMOVE_MOVIE",
      payload: id,
    });
  };

  const filteredMovies = store.movies.filter(({ title }) =>
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

      {store.isLoading ? (
        <p className="loading">Loading ...</p>
      ) : (
        <List list={filteredMovies} onRemoveItem={handleRemoveMovie}></List>
      )}
      {store.isError && <p className="error">Error, try later.</p>}
    </div>
  );
}

export default App;
