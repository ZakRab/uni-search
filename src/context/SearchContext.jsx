import React, { useState } from "react";

export const SearchContext = React.createContext(null);
export function SearchProvider(props) {
  const [searchInput, setSearchInput] = useState("");
  const [countrySearch, setCountrySearch] = useState("United States");
  return (
    <SearchContext.Provider
      value={{
        searchInput,
        setSearchInput,
        countrySearch,
        setCountrySearch,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}
