import React, { useState } from "react";
import useAxiosUni from "../hooks/useAxiosUni";
import UniCard from "./UniCard";
const UniDisplay = () => {
  const { data } = useAxiosUni();
  data && console.log(data);
  return (
    <div className="uniDisplay">
      {data &&
        data.map((val, idx) => {
          return <UniCard university={val} key={idx}></UniCard>;
        })}
    </div>
  );
};

export default UniDisplay;
