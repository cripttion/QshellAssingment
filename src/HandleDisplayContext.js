import React, { createContext, useContext, useState } from 'react';

// Create a context
const DisplayContext = createContext();

// Create a context provider component
export function HandleDisplayContext({ children }) {
  const [grouping, setGroupValue] = useState('Status');
  const [ordering,setOrderValue] = useState('options');

 

  return (
    <DisplayContext.Provider value={{ grouping,setGroupValue,ordering,setOrderValue }}>
      {children}
    </DisplayContext.Provider>
  );
}

// Custom hook for consuming the context
export function useDisplay() {
  return useContext(DisplayContext);
}