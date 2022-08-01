import React, { useCallback, useState } from "react";

export const SearchContext = React.createContext(null);
export function SearchProvider(props) {
  const [searchInput, setSearchInput] = useState("Nebraska");
  const [countrySearch, setCountrySearch] = useState("United States");
  const [saves, setSaves] = useState([]);

  const addSave = useCallback((university) =>
    setSaves((curr) => [university, ...curr])
  );

  const removeSave = useCallback((university) =>
    setSaves((curr) => curr.filter((val) => val !== university))
  );

  const clearSaves = useCallback(() => setSaves([]));

  return (
    <SearchContext.Provider
      value={{
        searchInput,
        setSearchInput,
        countrySearch,
        setCountrySearch,
        saves,
        setSaves,
        removeSave,
        addSave,
        clearSaves,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}
