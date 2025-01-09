import { useState, useEffect } from "react";

const useFetch = (url, sieve) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset-UTF-8",
      },
      body: JSON.stringify(sieve),
    });
    const data = await response.json();
    setLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [sieve.page]);

  return [loading, data];
};

export default useFetch;
