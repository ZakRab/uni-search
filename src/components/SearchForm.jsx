import React from "react";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import useAxiosUni from "../hooks/useAxiosUni";
import Map from "./Map";
import UniDisplay from "./UniDisplay";
import UniInfoAside from "./UniInfoAside";
const SearchForm = () => {
  const {} = useAxiosUni();
  return (
    <>
      <div className="margin-top5px d-flex flex-row gap">
        <UniDisplay></UniDisplay>
        <UniInfoAside></UniInfoAside>
        <Map className="flex-grow border-radius"></Map>
      </div>
    </>
  );
};

export default SearchForm;
