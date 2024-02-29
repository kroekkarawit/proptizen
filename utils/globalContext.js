import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [userBalance, setIsUserBalance] = useState(0);

  const contextValue = {
    isLoggedIn,
    setLoggedIn,
    isOpenModalLogin,
    setIsOpenModalLogin,
    userBalance,
    setIsUserBalance,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
