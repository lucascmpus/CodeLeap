import axios from "axios";
import { useState, useEffect } from "react";

interface useFetchProps {
  url: string;
  method: "get" | "post" | "put" | "delete";
  body?: any;
  headers?: any;
}

export function useFetch<T>({ method, url, body, headers }: useFetchProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState();

  function fetchData() {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { data, error, isLoading };
}
