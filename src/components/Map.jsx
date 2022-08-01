import React, { useContext } from "react";
import { WikiContext } from "../context/WikiContext";

const Map = () => {
  const { wikiInput } = useContext(WikiContext);
  const imgSrc =
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyCOxZRIqul2AcinqMy-XPC1jyjhyupp1v0&zoom=10&q=";
  return (
    <>
      <iframe
        title="map"
        className="border-radius flex-grow margin-right"
        width="700"
        height="970"
        loading="eager"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={imgSrc + wikiInput}
      ></iframe>
    </>
  );
};

export default Map;
