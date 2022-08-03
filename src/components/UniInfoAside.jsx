import React, { useContext, useState } from "react";
import useAxiosWiki from "../hooks/useAxiosWiki";
import useAxiosWikiImg from "../hooks/useAxiosWikiImg";
import { WikiContext } from "../context/WikiContext";
import { GrClose } from "react-icons/gr";

const UniInfoAside = () => {
  const { wikiInput } = useContext(WikiContext);
  const { wikiData } = useAxiosWiki(wikiInput);
  const { wikiImg } = useAxiosWikiImg(wikiInput);
  const [infoDisplay, setInfoDisplay] = useState("");
  return (
    <>
      <div
        className="uniInfoAside border-radius overflow  "
        style={{ display: { infoDisplay } }}>
        <div className="close-x" onClick={() => setInfoDisplay("none")}>
        <GrClose
          size={30}
        ></GrClose>
        </div>
        <h2> {wikiInput} </h2>
        <hr></hr>
        <img
          src={
            wikiImg &&
            wikiImg.query.pages[Object.keys(wikiImg.query.pages)[0]]
              .thumbnail &&
            wikiImg.query.pages[Object.keys(wikiImg.query.pages)[0]].thumbnail
              .source
          }
          alt=""
          className="Uni-info-img margin-auto d-block"
        ></img>
        <hr></hr>

        {/* <span>
          {wikiLoc &&
            wikiLoc.query.pages[Object.keys(wikiLoc.query.pages)[0]]
              .coordinates &&
            wikiLoc.query.pages[Object.keys(wikiLoc.query.pages)[0]]
              .coordinates[0].lat}
        </span> */}
        {/* <span>
          {wikiLoc &&
            wikiLoc.query.pages[Object.keys(wikiLoc.query.pages)[0]]
              .coordinates &&
            wikiLoc.query.pages[Object.keys(wikiLoc.query.pages)[0]]
              .coordinates[0].lon}
        </span> */}
        <p>
          {wikiData &&
            wikiData.query.pages[Object.keys(wikiData.query.pages)[0]] &&
            wikiData.query.pages[Object.keys(wikiData.query.pages)[0]].extract}
          {wikiData &&
            !wikiData.query.pages[Object.keys(wikiData.query.pages)[0]]
              .extract &&
            "no info found"}
        </p>
      </div>
    </>
  );
};

export default UniInfoAside;
