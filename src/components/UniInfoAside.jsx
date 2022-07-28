import React, { useContext } from "react";

import { WikiContext } from "../context/WikiContext";

const UniInfoAside = () => {
  const { wikicall, setWikiCall } = useContext(WikiContext);

  return (
    <>
      <div>
      <h2 >College info</h2>
      <img></img>
      <p></p>
      </div>
    </>
  );
};

export default UniInfoAside;
