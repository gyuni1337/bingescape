"use client";

import React, { createContext, useState } from 'react';

export const DataContext = createContext(false);

export const DataProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);


  return (
    <DataContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;