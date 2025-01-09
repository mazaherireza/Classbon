import "./App.css";
import Header from "./components/header/Header";
import CategoryList from "./components/CategoryList/categoryList";
import List from "./components/List/list";
import Loading from "./components/Loading/loading";
import { useState } from "react";
import useAxios from "./hooks/useAxios";
import NotFound from "./components/NotFound/notFound";

const API_ENDPOINT = "/FastFood/list";
const SEARCH_ENDPOINT = "/FastFood/search";

function App() {
  const [url, setUrl] = useState(API_ENDPOINT);

  const [items, , loading] = useAxios({
    url,
  });

  const handleChangeCategory = (id) =>
    setUrl(`${API_ENDPOINT}/?categoryId=${id}`);

  const handleSearch = (foodName) => {
    setUrl(`${SEARCH_ENDPOINT}/?term=${foodName}`);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading></Loading>;
    } else {
      if (items.length) {
        return <List list={items}></List>;
      } else {
        return <NotFound></NotFound>;
      }
    }
  };
  return (
    <div className="wrapper">
      <Header></Header>
      <CategoryList
        onChangeCategory={handleChangeCategory}
        onSearch={handleSearch}
      ></CategoryList>
      {renderContent()}
    </div>
  );
}

export default App;
