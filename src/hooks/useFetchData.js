import { useEffect, useState } from "react";
import { fetchDataApi } from "../api";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const apiData = async () => {
    try {
      setLoading("loading...");
      setData(null);
      setError(null);

      const resp = await fetchDataApi(url);
      setLoading(false);
      setData(resp);
    } catch (error) {
      setLoading(false);
      setError("Something went wrong!");
    }
  };

  useEffect(() => {
    apiData();
  }, [url]);

  return { data, loading, error };
};
