import React, { useContext } from "react";
import useAxiosWiki from "../hooks/useAxiosWiki";
import useAxiosWikiImg from "../hooks/useAxiosWikiImg";
import { WikiContext } from "../context/WikiContext";

const UniInfoAside = () => {
  const { wikicall, setWikiCall, wikiInput } = useContext(WikiContext);
  const { wikiData } = useAxiosWiki(wikiInput);
  const { wikiImg } = useAxiosWikiImg(wikiInput);

  console.log(wikiImg);
  return (
    <>
      <div className="uniInfoAside">
        <h2>College info</h2>
        <img
          src={
            wikiImg &&
            wikiImg.query.pages[Object.keys(wikiImg.query.pages)[0]].thumbnail
              .source
          }
        ></img>
        <p>
          {wikiData &&
            wikiData.query.pages[Object.keys(wikiData.query.pages)[0]].extract}
        </p>
      </div>
    </>
  );
};

export default UniInfoAside;
