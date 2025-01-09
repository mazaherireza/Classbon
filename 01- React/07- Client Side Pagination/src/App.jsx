import usePaginatedFetch from "./hooks/usePaginatedFetch";
import { useState, useEffect } from "react";
import List from "./components/List/list";
import Pagination from "./components/Pagination/pagination";

const baseURL =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";

const PER_PAGE = 3;

function App() {
  const [loading, data] = usePaginatedFetch(baseURL, PER_PAGE);
  const [page, setPage] = useState(1);
  const [programmers, setProgrammers] = useState([]);

  useEffect(() => {
    if (loading) return; // There isn't any data.
    setProgrammers(data[page - 1]);
  }, [loading, page]);

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else {
      return programmers && <List list={programmers}></List>;
    }
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        {renderContent()}
        <Pagination
          pages={data.length}
          setPage={setPage}
          activePage={page}
        ></Pagination>
      </div>
    </div>
  );
}

export default App;
