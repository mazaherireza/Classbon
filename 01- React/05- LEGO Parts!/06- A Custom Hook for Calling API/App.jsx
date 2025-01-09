import "./App.css";
import Header from "./components/header/Header";
import CategoryList from "./components/CategoryList/categoryList";
import List from "./components/List/list";
import Loading from "./components/Loading/loading";
import { useState } from "react";
import useAxios from "./hooks/useAxios";
import NotFound from "./components/NotFound/notFound";
import Footer from "./components/Footer/footer";

const API_ENDPOINT = "/API";
const SEARCH_ENDPOINT = "/Search";

function App() {
  const [url, setUrl] = useState(API_ENDPOINT); // Because API_ENDPOINT uses in the first render.

  const [items, , loading] = useAxios({
    // method: "GET",
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
      <Footer></Footer>
    </div>
  );
}

export default App;
