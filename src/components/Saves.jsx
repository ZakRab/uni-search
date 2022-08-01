import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { HiOutlineGlobe, HiHeart } from "react-icons/hi";
import { IoRibbonSharp } from "react-icons/io5";

const Saves = () => {
  const { saves, removeSave } = useContext(SearchContext);
  return (
    <>
      <h1 className="text-center">Your Saved Instituitions</h1>
      <div className="margin-auto" >
      {saves &&
        saves.map((university, idx) => {
          return (
            <div className="display-card" key={idx}>
              <div>{university.name}</div>
              <div className="gray">{university.country}</div>
              <a href={university.website} rel="noreferrer" target={"_blank"}>
                {<HiOutlineGlobe size={40}></HiOutlineGlobe>}
              </a>
              <HiHeart
                className="red"
                size={40}
                onClick={() => {
                  removeSave(university);
                }}
              >
                remove from saves
              </HiHeart>
              <a
                href={
                  "https://www.topuniversities.com/universities/" +
                  university.name
                }
                target={"_blank"}
                rel="noreferrer"
              >
                {<IoRibbonSharp size={40}></IoRibbonSharp>}
              </a>
            </div>
          );
        })}
            </div>
    </>
  );
};

export default Saves;
