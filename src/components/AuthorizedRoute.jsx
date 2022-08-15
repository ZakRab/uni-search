import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AuthorizedRoute = ({ comp, reqLogin }) => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      {!loggedInUser && <Navigate to={"/login"} />}
      {loggedInUser && <>{comp}</>}
    </>
  );
};
export default AuthorizedRoute;
