import React from "react";
import useAxiosWiki from "../hooks/useAxiosWiki";

const UniCard = (val, idx) => {
  return (
    <div className="display-card" key={idx}>
      <div>{val.university}</div>
      <div>{val.country}</div>
      <a href={val.website} target={"_blank"}>
        {val.website}
      </a>
    </div>
  );
};

export default UniCard;
