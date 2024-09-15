import initTranslations from "@/locales/i18n";
import BlogService from "@/services/BlogService";
import s from "@/styles/blog.module.css";
import Link from "next/link";
import { pages } from "../../../../settings";
import i18nConfig from "../../../../i18nConfig";

export const generateMetadata = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["meta"]);

  const { BLOG } = pages;

  const languages = {
    "x-default": `en${BLOG}`,
  };
  i18nConfig.locales.forEach((lang) => {
    if (lang === locale) return;
    if (lang === i18nConfig.defaultLocale) {
      languages[lang] = BLOG;
    } else {
      languages[lang] = `${lang}${BLOG}`;
    }
  });

  return {
    title: t("meta:title"),
    description: t("meta:description"),
    alternates: {
      canonical: `${locale === "ru" ? "" : locale}${BLOG}`,
      languages,
    },
  };
};

export default async function Blog({ params: { locale } }) {
  const articles = await BlogService.allArticles(locale);
  const { t } = await initTranslations(locale, ["blog"]);

  return (
    <div className={`first-screen`}>
      <div className={`container`}>
        <h1 className={s.title}>{t("blog:title")}</h1>
        {/* <p className={s.info}>
                    
                </p> */}

        <div className={s.items}>
          {articles.map(({ date, title, content_concise, slug, image_url }) => {
            return (
              <div className={s.item} key={slug}>
                <div className={s.item__date}>{date}</div>
                <div>
                  <img className={s.item__img} src={image_url} alt="" />
                </div>
                <div className={s.item__content}>
                  <h4 className={s.item__title}>{title}</h4>
                  <p className={s.item__text}>{content_concise}</p>
                  <Link href={slug + "/"} className={s.item__btnWrapper}>
                    <button className={s.item__btn}>
                      <p className={s.item__btn_text}>{t("blog:read")}</p>
                      <div className={s.item__btn_arrow}>
                        <img src="/svgs/arrow-right-blue.svg" alt="" />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
