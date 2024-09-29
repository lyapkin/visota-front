import PassBreadcrumbs from "@/components/Blog/PassBreadcrumbs";
import initTranslations from "@/locales/i18n";
import BlogService from "@/services/BlogService";

import styles from "@/styles/blog.module.css";
import { Suspense } from "react";
import { pages } from "../../../../../settings";
import {
  generateMetadataDynamic,
  getDynamicPageSEO,
} from "@/utils/generateMetadataUtil";

export const generateMetadata = async ({ params: { locale, slug } }) => {
  const { BLOG: pathSegment } = pages;

  const data = await getDynamicPageSEO("blog", slug, locale);

  return generateMetadataDynamic(pathSegment, slug, locale, data);
};

export default async function BlogPost({ params }) {
  const content = await BlogService.getArticleContent(
    params.slug,
    params.locale
  );
  const { t } = await initTranslations(params.locale, ["blog", "common"]);

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("common:blog"),
        item: `${process.env.BACK_URL}${
          locale === "ru" ? "" : "/" + locale
        }/blog/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: content.title,
        item: `${process.env.BACK_URL}${
          locale === "ru" ? "" : "/" + locale
        }/blog/${params.slug}/`,
      },
    ],
  };

  return (
    <div className={`first-screen ${styles["blog-inside"]}`}>
      <div className="container">
        {!content.detail ? (
          <div
            className={styles["blog-inside__content"]}
            dangerouslySetInnerHTML={{ __html: content.content }}
          ></div>
        ) : (
          <>
            <p style={{ margin: "60px 0", fontSize: 40 }}>
              {t("blog:no_posts")}
            </p>
          </>
        )}
      </div>
      <Suspense fallback={<></>}>
        <PassBreadcrumbs title={content.title} />
      </Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </div>
  );
}
