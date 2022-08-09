import React, { useCallback, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import { add, remove } from "../server/models/saves.model";

export const SearchContext = React.createContext(null);
export function SearchProvider(props) {
  const [searchInput, setSearchInput] = useState("Nebraska");
  const [countrySearch, setCountrySearch] = useState("United States");
  const [saves, setSaves] = useState([]);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    async function init() {
      if (loggedInUser) {
        const res = await axios.get(`/api/saves/${loggedInUser.id}`);
        if (res.data.success) {
          setSaves(res.data.data);
        }
      }
    }
    init();
  }, [loggedInUser]);

  const addSave = useCallback(async (university) => {
    try {
      const res = await axios.put("api/saves/add", {
        ...university,
        user_id: loggedInUser.id,
      });
      if (res.data.success) {
        setSaves((curr) => [res.data.data, ...curr]);
      }
    } catch (error) {}
  });

  const removeSave = useCallback(async (university) => {
    try {
      const res = await axios.delete(
        `api/saves/remove/${university.name}/${loggedInUser.id}`
      );
      if (res.data.success) {
        setSaves((curr) => curr.filter((val) => val.name !== university.name));
      }
    } catch (error) {
      console.log(error);
    }
  });

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
