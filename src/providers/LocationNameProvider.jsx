"use client";
import React, { createContext, useState } from "react";

export const LocationNameContext = createContext(null);

const LocationNameProvider = ({ children }) => {
    const [name, setName] = useState({});

    return (
        <LocationNameContext.Provider value={[name, setName]}>
            {children}
        </LocationNameContext.Provider>
    );
};

export default LocationNameProvider;
