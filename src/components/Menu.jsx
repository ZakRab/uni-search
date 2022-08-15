import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { SearchContext } from "../context/SearchContext";
const Menu = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const { setSaves } = useContext(SearchContext);
  return (
    <header className="navbar navbar-expand-lg shadow-border">
      <div className="container-fluid links">
        <img
          className="height100px"
          src={require("./unisearch-logo-right.png")}
          alt="what"
        />
        <div id="menu-items">
          <NavLink to="/home" className="menu-items text-black links">
            Home
          </NavLink>
        </div>

        <div id="menu-items">
          <NavLink to="/search" className="menu-items text-black links">
            Search Universities
          </NavLink>
        </div>

        <div>
          <NavLink to="/saves" className="links text-black menu-items ">
            Saved Universites
          </NavLink>
        </div>
        {!loggedInUser && (
          <div>
            <NavLink to="/login" className="links text-black menu-items">
              Sign In
            </NavLink>
          </div>
        )}

        {loggedInUser && (
          <div>
            <NavLink
              to="/login"
              className="links menu-items text-black"
              onClick={() => {
                setLoggedInUser(null);
                // setSaves([]);
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
