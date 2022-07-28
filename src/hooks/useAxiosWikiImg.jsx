import { useState, useEffect, useContext } from "react";

export default function useAxiosWikiImg(wikiInput) {
  const [error, setError] = useState(null);
  const [wikiImg, setWikiImg] = useState(null);
  const axios = require("axios");
  const baseUrl1 =
    "https://en.wikipedia.org/w/api.php?action=query&prop=extracts%7Cpageimages%7Cinfo&pithumbsize=400&inprop=url&redirects=&format=json&origin=*&exintro=1&titles=";
  useEffect(() => {
    async function init() {
      if (!wikiInput) return;
      setWikiImg(null);
      setError(null);
      try {
        const response = await axios.get(baseUrl1 + wikiInput);
        console.log(response);
        setWikiImg(response.data);
      } catch (e) {
        setError(e);
      }
    }
    init();
  }, [wikiInput]);

  return { wikiImg, error };
}
