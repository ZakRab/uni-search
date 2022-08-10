import React, { useCallback, useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export const SearchContext = React.createContext(null);
export function SearchProvider(props) {
  const [searchInput, setSearchInput] = useState("Nebraska");
  const [countrySearch, setCountrySearch] = useState("United States");
  const [saves, setSaves] = useState([]);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    if (!loggedInUser) {
      return;
    }
    async function init() {
      try {
        const res = await axios.get(`/api/saves/user`);
        if (res.data.success) {
          setSaves(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    init();
  }, [loggedInUser]);

  const addSave = useCallback(
    async (university) => {
      try {
        const res = await axios.put("/api/saves/add", university);
        if (res.data.success) {
          setSaves((curr) => [res.data.data, ...curr]);
        }
      } catch (error) {}
    },
    [setSaves]
  );

  const removeSave = useCallback(
    async (university) => {
      try {
        const res = await axios.delete(`/api/saves/remove/${university.name}`);
        if (res.data.success) {
          setSaves((curr) =>
            curr.filter((val) => val.name !== university.name)
          );
        }
      } catch (error) {
        console.log(error);
      }
    },
    [setSaves]
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
