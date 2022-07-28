import React, { useCallback, useState } from "react";

export const UserContext = React.createContext(null);
export function UserProvider(props) {
  const [userName, setUserName] = useState(null);
  const [loggedInUser, setloggedInUser] = useState(null);
  const logIn = useCallback(
    (userName) => {
      setloggedInUser(userName);
    },
    [userName]
  );
  const logOut = useCallback(() => {
    setloggedInUser(null);
  }, [setloggedInUser]);
  return (
    <UserContext.Provider
      value={{ loggedInUser, setloggedInUser, logIn, logOut, setUserName }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
