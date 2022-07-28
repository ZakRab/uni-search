import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Menu = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  return (
    <header className="navbar navbar-expand-lg opacity sticky">
      <div className="container-fluid links">
        {loggedInUser && (
          <div>
            <NavLink to="/search" className="links">
              Search Universities
            </NavLink>
          </div>
        )}
        {!loggedInUser && (
          <div>
            <NavLink to="/login" className="links ">
              Login
            </NavLink>
          </div>
        )}
        {loggedInUser && (
          <div>
            <NavLink to="/saves" className="links ">
              Saved Universites
            </NavLink>
          </div>
        )}
        {loggedInUser && (
          <div>
            <NavLink
              to="/login"
              className="links"
              onClick={() => {
                setLoggedInUser(null);
              }}
            >
              Logout
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};
export default Menu;
