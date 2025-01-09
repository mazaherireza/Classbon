import { useState, useEffect } from "react";
import { chunk } from "lodash";

const usePaginatedFetch = (url, perPage) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const paginatedData = chunk(data, perPage);
    setLoading(false);
    setData(paginatedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [loading, data];
};

export default usePaginatedFetch;
