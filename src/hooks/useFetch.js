import { useEffect, useState } from "react";
import axios from "axios";

export async function useFetch(url) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, isFetching };
}
