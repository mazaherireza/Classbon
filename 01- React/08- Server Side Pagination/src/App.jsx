import useFetch from "./hooks/useFetch";
import { useState, useEffect } from "react";
import List from "./components/List/list";
import Pagination from "./components/Pagination/pagination";

const baseURL = "https://react-mini-projects-api.classbon.com/Programmer/sieve";
const pageSize = 3;

function App() {
  const [page, setPage] = useState(1);
  const [loading, programmers] = useFetch(baseURL, { page, pageSize });

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else {
      return programmers && <List list={programmers.data}></List>;
    }
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        {renderContent()}
        <Pagination
          pages={Math.ceil(programmers.totalRecords / pageSize)}
          setPage={setPage}
          activePage={page}
        ></Pagination>
      </div>
    </div>
  );
}

export default App;
