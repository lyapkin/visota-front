import styles from "@/styles/home.module.css";
import AboutAchievements from "../Home/about/AboutAchievements";
import initTranslations from "@/locales/i18n";

export default async function AboutSection({ locale }) {
  const { t } = await initTranslations(locale, ["about_section"]);
  return (
    <section className={styles["home-about"]}>
      <div className="container">
        <div className={styles["home-about__video"]}>
          <h6>{t("about_section:video")}</h6>
          <video
            controls="controls"
            preload="none"
            poster="/images/home-about-video-preview.jpg"
          >
            <source
              src="/videos/visota.mp4"
              type="video/mp4"
              codecs="avc1.42E01E, mp4a.40.2"
            />
          </video>
        </div>
        <div className={styles["home-about__description"]}>
          <h2
            className={styles["home-sections-header"]}
            dangerouslySetInnerHTML={{
              __html: t("about_section:title", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></h2>
          <div>
            <p>{t("about_section:text")}</p>
            {/* <p>{t('about_section:text')}</p> */}
          </div>
        </div>
        <AboutAchievements />
      </div>
    </section>
  );
}
