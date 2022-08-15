import React, { useCallback, useState } from "react";
import axios from "axios";
export const UserContext = React.createContext(null);

export function UserProvider(props) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const logIn = useCallback(
    async (username, password) => {
      try {
        const res = await axios.post("/api/users/login", {
          username,
          password,
        });
        console.log(res);
        if (res.data.success) {
          setLoggedInUser(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [setLoggedInUser]
  );

  const logOut = useCallback(async () => {
    try {
      const res = await axios.get("/api/user/logout");
      if (res.data.success) {
        setLoggedInUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  }, [setLoggedInUser]);

  const register = useCallback(async (username, password) => {
    try {
      const res = await axios.put("/api/users/register", {
        username,
        password,
      });
      console.log(res);
      if (res.data.success) {
        console.log("registered!");
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  });

  const verify = useCallback(async () => {
    try {
      const res = await axios.get("/api/users/verify");
      if (res.data.success) {
        setLoggedInUser(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <UserContext.Provider
      value={{
        verify,
        loggedInUser,
        setLoggedInUser,
        logIn,
        logOut,
        register,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
