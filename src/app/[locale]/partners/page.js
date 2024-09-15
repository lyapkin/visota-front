import PartnersTabs from "@/components/Partners/PartnersTabs";
import initTranslations from "@/locales/i18n";
import s from "@/styles/partners.module.css";
import { pages } from "../../../../settings";
import i18nConfig from "../../../../i18nConfig";

export const generateMetadata = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["meta"]);

  const { PARTNERS } = pages;

  const languages = {
    "x-default": `en${PARTNERS}`,
  };
  i18nConfig.locales.forEach((lang) => {
    if (lang === locale) return;
    if (lang === i18nConfig.defaultLocale) {
      languages[lang] = PARTNERS;
    } else {
      languages[lang] = `${lang}${PARTNERS}`;
    }
  });

  return {
    title: t("meta:title"),
    description: t("meta:description"),
    alternates: {
      canonical: `${locale === "ru" ? "" : locale}${PARTNERS}`,
      languages,
    },
  };
};

export default async function Partners({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["partners"]);
  return (
    <div className={`first-screen ${s.partners}`}>
      <div className="container">
        <h1 className={s.title}>{t("partners:title")}</h1>
        <PartnersTabs />
      </div>
    </div>
  );
}
