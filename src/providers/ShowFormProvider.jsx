"use client";
import React, { createContext, useState } from "react";

export const ShowFormContext = createContext(null);

const ShowFormProvider = ({ children }) => {
  const [isFormShown, setIsFormShown] = useState(false);

  return (
    <ShowFormContext.Provider value={{ isFormShown, setIsFormShown }}>
      {children}
    </ShowFormContext.Provider>
  );
};

export default ShowFormProvider;
