import Form from "@/components/Form/Form";
import ProjectsSlider from "@/components/Slider/ProjectsSlider";
import styles from "@/styles/home.module.css";
import CatalogSlider from "@/components/Slider/CatalogSlider";
import HomeFrontSlider from "@/components/Slider/HomeFrontSlider";
import PopupForm from "@/components/Form/PopupForm";
import initTranslations from "@/locales/i18n";
import AboutSection from "@/components/AboutSection/AboutSection";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import DeliverySection from "@/components/DeliverySection/DeliverySection";
import { pages } from "../../../settings";
import i18nConfig from "../../../i18nConfig";

export const generateMetadata = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["meta"]);

  const { HOME } = pages;

  const languages = {
    "x-default": `en${HOME}`,
  };
  i18nConfig.locales.forEach((lang) => {
    if (lang === locale) return;
    if (lang === i18nConfig.defaultLocale) {
      languages[lang] = HOME;
    } else {
      languages[lang] = `${lang}${HOME}`;
    }
  });

  return {
    title: t("meta:title"),
    description: t("meta:description"),
    alternates: {
      canonical: `${locale === "ru" ? "" : locale}${HOME}`,
      languages,
    },
  };
};

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ["home", "common"]);
  return (
    <main>
      <section className={`${styles["home-main"]} first-screen`}>
        <div className="container" style={{ position: "relative" }}>
          <h1
            className={styles["home-main__header"]}
            dangerouslySetInnerHTML={{
              __html: t("home:main.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></h1>
          <p
            className={styles["home-main__promise"]}
            dangerouslySetInnerHTML={{
              __html: t("home:main.second", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></p>
          <div className={styles["home-main__actions"]}>
            <PopupForm text={t("main.button")} type={"offer"} />
          </div>

          <div className={styles["home-main__slider"]}>
            <HomeFrontSlider />
          </div>
        </div>
      </section>
      <section className={styles["home-advantages"]}>
        <div className="container">
          <h2
            className={styles["home-sections-header"]}
            dangerouslySetInnerHTML={{
              __html: t("home:advantages.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></h2>
          <div className={styles["home-advantages-content"]}>
            <div
              className={`${styles["home-advantages-block"]} ${styles["home-advantages-block-1"]}`}
            >
              <img src="/images/advantages/papers.png" alt="лицензия" />
              <h5
                dangerouslySetInnerHTML={{
                  __html: t("home:advantages.first_block_title", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></h5>
              <p>{t("home:advantages.first_block_text")}</p>
            </div>
            <div
              className={`${styles["home-advantages-block"]} ${styles["home-advantages-block-2"]}`}
            >
              <img src="/images/advantages/truck.png" alt="грузовик" />
              <h5
                dangerouslySetInnerHTML={{
                  __html: t("home:advantages.second_block_title", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></h5>
              <p>{t("home:advantages.second_block_text")}</p>
            </div>

            <div
              className={`${styles["home-advantages-block"]} ${styles["home-advantages-block-3"]}`}
            >
              <img src="/images/advantages/calendar.png" alt="календарь" />
              <h5
                dangerouslySetInnerHTML={{
                  __html: t("home:advantages.third_block_title", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></h5>
              <p>{t("home:advantages.third_block_text")}</p>
            </div>
            <div
              className={`${styles["home-advantages-block"]} ${styles["home-advantages-block-4"]}`}
            >
              <img src="/images/advantages/money.png" alt="деньги" />
              <h5
                dangerouslySetInnerHTML={{
                  __html: t("home:advantages.forth_block_title", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></h5>
              <p>{t("home:advantages.forth_block_text")}</p>
            </div>
          </div>
          <div className={styles["home-advantages-form"]}>
            <Form main={false} />
          </div>
        </div>
      </section>
      <section className={styles["home-catalog"]}>
        <div className="container">
          <h2
            className={styles["home-sections-header"]}
            dangerouslySetInnerHTML={{
              __html: t("home:catalog.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></h2>
          <CatalogSlider />
        </div>
      </section>
      <section className={styles["home-projects"]}>
        <div className="container">
          <h2
            className={styles["home-sections-header"]}
            dangerouslySetInnerHTML={{
              __html: t("home:projects.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></h2>
          <ProjectsSlider />
        </div>
      </section>
      <DeliverySection locale={locale} />

      <ClientsSection locale={locale} />

      <AboutSection locale={locale} />
    </main>
  );
}
