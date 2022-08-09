import React, { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const UserContext = React.createContext(null);

export function UserProvider(props) {
  const [userName, setUserName] = useState(null);
  const [loggedInUser, setloggedInUser] = useState(null);
  const logIn = useCallback(
    async (userName, password) => {
      try {
        const res = await axios.post("api/users/login", {
          userName,
          password,
        });
        if (res.data.success) {
          setloggedInUser(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [userName]
  );
  const logOut = useCallback(() => {
    setloggedInUser(null);
  }, [setloggedInUser]);

  const register = useCallback(async (userName, password) => {
    try {
      const res = await axios.put("api/users/register", {
        userName,
        password,
      });
      if (res.data.success) {
        console.log("registered!");
      }
    } catch (error) {}
  });
  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setloggedInUser,
        logIn,
        logOut,
        setUserName,
        register,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
