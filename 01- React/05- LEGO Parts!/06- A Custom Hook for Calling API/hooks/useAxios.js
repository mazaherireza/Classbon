import axios from "axios";
import { useState, useEffect } from "react";

const instance = axios.create({
  baseURL: "https://something",
});

const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await instance.request(axiosParams);
      setResponse(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [axiosParams.url]);

  return [response, error, loading]; // return states <-------
};

export default useAxios;
