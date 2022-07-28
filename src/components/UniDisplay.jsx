import React, { useState } from "react";
import useAxiosUni from "../hooks/useAxiosUni";
import UniCard from "./UniCard";
const UniDisplay = () => {
  const { data } = useAxiosUni();
  data && console.log(data);
  return (
    <>
      {data &&
        data.map((val, idx) => {
          return <UniCard university={val} key={idx}></UniCard>;
        })}
    </>
  );
};

export default UniDisplay;
