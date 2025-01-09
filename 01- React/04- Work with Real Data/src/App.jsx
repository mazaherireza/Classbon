import "./App.css";
import useStorageState from "./hooks/useStorageState";
import InputWithLabel from "./components/common/inputWithLabel/InputWithLabel";
import List from "./components/list/List";
import { useEffect, useReducer } from "react";
import { storeReducer } from "./components/reducer/storeReducer";

function App() {
  const [keySearch, setKeySearch] = useStorageState("keySearch", "");
  const [store, dispatchStore] = useReducer(storeReducer, {
    stories: [],
    isLoading: false,
    isError: false,
  });

  const handleSearch = (val) => {
    setKeySearch(val);
  };

  const API_ENDPOINT = "https://react-mini-projects-api.classbon.com/Story/list";

  useEffect(() => {
    if (!keySearch) return;
    dispatchStore({ type: "STORIES_FETCH_INIT" });
    fetch(`${API_ENDPOINT}?query=${keySearch}`)
      .then((respone) => respone.json())
      .then((stories) =>
        dispatchStore({ type: "STORIES_FETCH_SUCCESS", payload: stories })
      )
      .catch((error) => {
        dispatchStore({ type: "STORIES_FETCH_FAILURE", payload: error });
      });
  }, [keySearch]);

  const handleRemoveStory = (id) => {
    dispatchStore({
      type: "REMOVE_STORY",
      payload: id,
    });
  };

  return (
    <div>
      <InputWithLabel
        label="Search Story: "
        _id="keySearch"
        value={keySearch}
        placeholder="Type to search"
        onInputChange={handleSearch}
        isFocused
      ></InputWithLabel>

      {store.isLoading ? (
        <p className="loading">Loading ...</p>
      ) : (
        <List list={store.stories} onRemoveItem={handleRemoveStory}></List>
      )}
      {store.isError && <p className="error">Error, try later.</p>}
    </div>
  );
}

export default App;
