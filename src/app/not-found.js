import { permanentRedirect } from "next/navigation";
import React from "react";

const NotFound = () => {
  console.log("not found !!!!!!");
  permanentRedirect("/");
  return <div>NotFound</div>;
};

export default NotFound;
