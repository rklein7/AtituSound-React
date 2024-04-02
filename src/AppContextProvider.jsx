import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const initialData = {
    isLogged: true,
    token: ""
  };

  const [data, setData] = useState(initialData);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}
