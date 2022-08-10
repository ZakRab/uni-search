import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { WikiContext } from "../context/WikiContext";
import { IoRibbonSharp } from "react-icons/io5";
import { HiOutlineGlobe, HiHeart } from "react-icons/hi";

const UniCard = ({ university, isSaved }) => {
  const { setWikiInput } = useContext(WikiContext);
  const { addSave, removeSave } = useContext(SearchContext);
  return (
    <div
      className="display-card margin-top "
     
    >
      <div >{university.name}</div>
      <div className="gray">{university.country}</div>
      <div className="flex flex-row justify">
        <a href={university.website} rel="noreferrer" target={"_blank"}>
          {<HiOutlineGlobe size={40}></HiOutlineGlobe>}
        </a>
        <a
          href={
            "https://www.topuniversities.com/universities/" + university.name
          }
          target={"_blank"}
          rel="noreferrer"
        >
          {<IoRibbonSharp size={40}></IoRibbonSharp>}
        </a>

        {!isSaved ? (
        <HiHeart
            onClick={() => {
              addSave(university);
            }}
            size={40}
            className="gray d-inline"
           
            data-testid="saveHeartAdd">Add to saves</HiHeart>
            
        ) : (
          <HiHeart
            size={40}
            className=" red"
            onClick={() => {
              console.log("bruh");
              removeSave(university);
            }}
            data-testid="saveHeartRemove"
          >
            remove from saves
          </HiHeart>
        )}
      </div>
      <button onClick={() => setWikiInput(university.name)} className="btn btn-primary">see info</button>
    </div>
  );
};

export default UniCard;
