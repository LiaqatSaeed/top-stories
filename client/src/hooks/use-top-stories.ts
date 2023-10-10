import { useEffect, useState } from "react";
import { API, DOMAIN_URL } from "../helpers/const";

// Define your custom hook
export const useTopStories = (section: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the URL based on the endpoint and params
    const apiUrl = `${DOMAIN_URL}${API.TOP_STORIES}/${section}`;

    setIsLoading(true);

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [section]);

  return { data, isLoading, error };
};
