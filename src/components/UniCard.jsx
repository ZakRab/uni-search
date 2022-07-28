import React, { useContext } from "react";
import { WikiContext } from "../context/WikiContext";

const UniCard = ({ university }) => {
  const { setWikiInput } = useContext(WikiContext);
  return (
    <div className="display-card" onClick={() => setWikiInput(university.name)}>
      <div>{university.name}</div>
      <div>{university.country}</div>
      <a href={university.website} target={"_blank"}>
        {university.website}
      </a>
    </div>
  );
};

export default UniCard;
