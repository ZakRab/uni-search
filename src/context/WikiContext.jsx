import React, { useState } from "react";

export const WikiContext = React.createContext(null);
export function WikiProvider(props) {
  const [wikiInput, setWikiInput] = useState("");
  const [wikiCall, setWikiCall] = useState(false);
  const [wikiData, setWikiData] = useState(null);

  return (
    <WikiContext.Provider
      value={{
        wikiCall,
        setWikiCall,
        wikiData,
        setWikiData,
        setWikiInput,
      }}
    >
      {props.children}
    </WikiContext.Provider>
  );
}
