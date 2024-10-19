import { permanentRedirect } from "next/navigation";

const Page = () => {
  permanentRedirect("/");
  return null;
};

export default Page;
