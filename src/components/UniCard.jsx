import React from "react";
import useAxiosWiki from "../hooks/useAxiosWiki";

const UniCard = ({ university }) => {
  return (
    <div className="display-card">
      <div>{university.name}</div>
      <div>{university.country}</div>
      <a href={university.website} target={"_blank"}>
        {university.website}
      </a>
    </div>
  );
};

export default UniCard;
