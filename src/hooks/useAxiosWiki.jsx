// import { useState, useEffect, useContext } from "react";
// import { SearchContext } from "../context/SearchContext";

// export default function useAxiosWiki() {
//   const [wikiData, setWikiData] = useState(null);
//   const [error, setError] = useState(null);
//   const [title, setTitle] = useState("donkey");

//   const axios = require("axios");
//   //   const baseUrl1 = "https://en.wikipedia.org/w/api.php?action=query&titles=";
//   //   const baseUrl2 = "&prop=extracts&format=json&exintro=1";

//   useEffect(() => {
//     async function init() {
//       setWikiData(null);
//       setError(null);
//       try {
//         // const response = await axios.get(baseUrl1 + title + baseUrl2);
//         // console.log(response);
//       } catch (e) {
//         setError(e);
//       }
//     }
//     init();
//   }, []);

//   return { wikiData, error, title, setTitle };
// }
