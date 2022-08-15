import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function useAxiosUni() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { searchInput, countrySearch } = useContext(SearchContext);
  const axios = require("axios");
  const baseUrl = "http://universities.hipolabs.com/search?name=";

  useEffect(() => {
    async function init() {
      setData(null);
      setError(null);
      try {
        const response = await axios.get(
          baseUrl + searchInput + "&country=" + countrySearch
        );
        setData(
          response.data.map((val) => ({
            country: val.country,
            university: val.name,
            website: val.web_pages,
          }))
        );
      } catch (e) {
        setError(e);
      }
    }
    init();
  }, [searchInput, countrySearch]);

  return { data, error };
}
