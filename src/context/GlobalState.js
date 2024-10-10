import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [pageSize, setPageSize] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("");

  return (
    <GlobalContext.Provider
      value={{ pageSize, setPageSize, searchQuery, setSearchQuery, filterValue, setFilterValue }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
