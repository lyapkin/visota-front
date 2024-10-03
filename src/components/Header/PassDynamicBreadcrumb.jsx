"use client";
import { LocationNameContext } from "@/providers/LocationNameProvider";
import React, { useContext, useEffect } from "react";

const PassDynamicBreadcrumb = ({ page, name }) => {
  const [_, setLocationName] = useContext(LocationNameContext);

  useEffect(() => {
    setLocationName((prev) => ({ ...prev, [page]: name }));

    return () => {
      setLocationName((prev) => {
        const newState = { ...prev };
        delete newState[page];
        return newState;
      });
    };
  }, []);

  return <></>;
};

export default PassDynamicBreadcrumb;
