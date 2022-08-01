import { useState, useEffect, useContext } from "react";

export default function useAxiosWiki(wikiInput) {
  const [error, setError] = useState(null);
  const [wikiLoc, setWikiLoc] = useState(null);
  const axios = require("axios");
  const baseUrl1 =
    "https://en.wikipedia.org/w/api.php?action=query&prop=extracts%7Cpageimages%7Cinfo&pithumbsize=400&inprop=url&redirects=&format=json&origin=*&exintro=1&explaintext=1&prop=coordinates&titles=";

  useEffect(() => {
    async function init() {
      if (!wikiInput) return;
      setWikiLoc(null);
      setError(null);
      try {
        const response = await axios.get(baseUrl1 + wikiInput);
        setWikiLoc(response.data);
        console.log(response);
      } catch (e) {
        setError(e);
      }
    }
    init();
  }, [wikiInput]);

  return { wikiLoc, error };
}
