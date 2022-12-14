import { useState, useEffect, useContext } from "react";

export default function useAxiosWiki(wikiInput) {
  const [error, setError] = useState(null);
  const [wikiData, setWikiData] = useState(null);
  const axios = require("axios");
  const baseUrl1 =
    "https://en.wikipedia.org/w/api.php?action=query&prop=extracts%7Cpageimages%7Cinfo&pithumbsize=400&inprop=url&redirects=&format=json&origin=*&exintro=1&explaintext=1&titles=";

  useEffect(() => {
    async function init() {
      if (!wikiInput) return;
      setWikiData(null);
      setError(null);
      try {
        const response = await axios.get(baseUrl1 + wikiInput);
        setWikiData(response.data);
      } catch (e) {
        setError(e);
      }
    }
    init();
  }, [wikiInput]);

  return { wikiData, error };
}
