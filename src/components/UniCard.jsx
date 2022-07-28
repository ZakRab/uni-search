import React, { useContext } from "react";
import { WikiContext } from "../context/WikiContext";
import useAxiosWiki from "../hooks/useAxiosWiki";

const UniCard = ({ university }) => {
  const { setWikiCall, wikiCall, setWikiInput, wikiInput } =
    useContext(WikiContext);

  return (
    <div
      className="display-card"
      onClick={() => (
        setWikiCall((curr) => !curr),
        setWikiInput(university.name),
        console.log(wikiInput)
      )}
    >
      <div>{university.name}</div>
      <div>{university.country}</div>
      <a href={university.website} target={"_blank"}>
        {university.website}
      </a>
    </div>
  );
};

export default UniCard;
