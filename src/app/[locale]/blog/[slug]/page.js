import PassBreadcrumbs from "@/components/Blog/PassBreadcrumbs";
import initTranslations from "@/locales/i18n";
import BlogService from "@/services/BlogService";

import styles from "@/styles/blog.module.css";
import { Suspense } from "react";
import { pages } from "../../../../../settings";
import i18nConfig from "../../../../../i18nConfig";

// export const generateMetadata = async ({ params: { locale } }) => {
//   const { t } = await initTranslations(locale, ["meta"]);

//   const { HOME } = pages;

//   const languages = {
//     "x-default": `en${HOME}`,
//   };
//   i18nConfig.locales.forEach((lang) => {
//     if (lang === locale) return;
//     if (lang === i18nConfig.defaultLocale) {
//       languages[lang] = HOME;
//     } else {
//       languages[lang] = `${lang}${HOME}`;
//     }
//   });

//   return {
//     title: t("meta:title"),
//     description: t("meta:description"),
//     alternates: {
//       canonical: `${locale === "ru" ? "" : locale}${HOME}`,
//       languages,
//     },
//   };
// };

export default async function BlogPost({ params }) {
  const content = await BlogService.getArticleContent(
    params.slug,
    params.locale
  );
  const { t } = await initTranslations(params.locale, ["blog"]);

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
    </div>
  );
}
