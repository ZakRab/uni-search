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
          return <UniCard val={val} idx={idx}></UniCard>;
        })}
    </>
  );
};

export default UniDisplay;
