import React, { createContext, useEffect, useState } from "react";
// Next Components
import { useRouter } from "next/router";

export const AppContext = createContext();

const AppState = (props) => {
  const router = useRouter();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("admin-harsh")) {
      setIsAdminLoggedIn(true);
    } else {
      setIsAdminLoggedIn(false);
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("admin-harsh");
    setIsAdminLoggedIn(false);
    router.push("/");
  };

  return (
    <AppContext.Provider
      value={{
        msg: "Namaste Dunia!",
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        logOut,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
