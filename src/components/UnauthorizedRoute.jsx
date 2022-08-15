import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UnauthorizedRoute = ({ comp, reqLogin }) => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      {loggedInUser && <Navigate to={"/search"} />}
      {!loggedInUser && <>{comp}</>}
    </>
  );
};
export default UnauthorizedRoute;
