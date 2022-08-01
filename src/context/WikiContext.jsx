import React, { useState } from "react";

export const WikiContext = React.createContext(null);
export function WikiProvider(props) {
  const [wikiInput, setWikiInput] = useState("omaha");
  const [wikiCall, setWikiCall] = useState(false);
  const [wikiData, setWikiData] = useState(null);
  const [wikiLoc, setWikiLoc] = useState(null);
  return (
    <WikiContext.Provider
      value={{
        wikiCall,
        setWikiCall,
        wikiData,
        setWikiData,
        setWikiInput,
        wikiInput,
        wikiLoc,
        setWikiLoc,
      }}
    >
      {props.children}
    </WikiContext.Provider>
  );
}
