import { permanentRedirect } from "next/navigation";

const NotFound = () => {
  permanentRedirect("/");
  return null;
};

export default NotFound;
