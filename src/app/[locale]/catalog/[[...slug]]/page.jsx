import Products from "@/components/catalog/Products";
import Spinner from "@/components/Spinner/Spinner";
import { Suspense } from "react";
import { pages } from "../../../../../settings";
import { notFound } from "next/navigation";
import {
  generateMetadataDynamic,
  generateMetadataStatic,
  getDynamicPageSEO,
  getStaticPageSEO,
} from "@/utils/generateMetadataUtil";

export const generateMetadata = async ({
  params: { locale, slug },
  searchParams,
}) => {
  const { CATALOG: pathSegment } = pages;

  let meta;

  if (slug) {
    const data = await getDynamicPageSEO("category", slug[0], locale);
    meta = generateMetadataDynamic(pathSegment, slug[0], locale, data);
  } else {
    const data = await getStaticPageSEO("catalog", locale);
    meta = generateMetadataStatic(pathSegment, locale, data);
  }

  meta.robots =
    Object.keys(searchParams).length > 0
      ? {
          index: false,
          follow: true,
        }
      : meta.robots;

  return meta;
};

const Catalog = async ({ params: { locale, slug } }) => {
  // await categoryExists(slug);
  return (
    <Suspense fallback={<Spinner />}>
      <Products catSlug={slug ? slug[0] : null} />
    </Suspense>
  );
};

const categoryExists = async (slug) => {
  if (!slug) return;
  const response = await fetch(
    process.env.BACK_URL + "/api/catalog/categories/" + slug + "/exists/",
    {
      next: { revalidate: 60 },
    }
  );
  if (response.status == 404) notFound();
  if (response.ok) return;
  throw new Error("problem with checking whether a category exists");
};

export default Catalog;
