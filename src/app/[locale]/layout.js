import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import styles from "@/styles/layout.module.css";
import Form from "@/components/Form/Form";
import CartProvider from "@/providers/CartProvider";
import BreadCrumbsProvider from "@/providers/BreadCrumbsProvider";
import ShowFormProvider from "@/providers/ShowFormProvider";
import initTranslations from "../../locales/i18n";
import TranslationsProvider from "@/providers/TranslationsProvider";
import i18nConfig from "../../../i18nConfig";
import Script from "next/script";
import CategoriesProvider from "@/providers/CategoriesProvider";
import { Suspense } from "react";
import YandexMetrika from "@/components/Yandex/YandexMetrika";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["meta"]);

  return {
    title: t("meta:title"),
    description: t("meta:description"),
    metadataBase: new URL(process.env.BACK_URL + "/"),
  };
};

// export const metadata = {
// 	title: "ООО Уралснабресурс - официальный сайт. Производство и продажа строительного оборудования в Москве и РФ",
// 	description: "Поставка строительного оборудования от производителя Уралснабресурс: хомуты для лесов, шпунты ларсена, пиломатериалы, лестницы, опалубка, вышки-туры. Выгодные цены. Быстрая поставка по Росиии и СНГ.",
// };

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, [
    "map",
    "breadcrumbs",
    "home",
    "form",
    "common",
    "about_section",
    "partners",
    "catalog",
    "cart",
    "contacts",
    "blog",
    "sort",
  ]);

  const categories = await getCategories(locale);
  const gtmId = "GTM-TPWV5B9R";

  return (
    <html lang={locale}>
      <GoogleTagManager gtmId={gtmId} />
      <body className={inter.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Script src="/static/seo/js/custom-body.js" />
        <Script
          src="/static/seo/js/custom-head.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/static/hack/inject-custom-css.js"
          strategy="beforeInteractive"
        />
        <Script src="//code.jivo.ru/widget/b6tVDylH8Y" strategy="lazyOnload" />

        <CategoriesProvider categories={categories}>
          <BreadCrumbsProvider>
            <ShowFormProvider>
              <CartProvider>
                <TranslationsProvider
                  resources={resources}
                  namespaces={[
                    "footer",
                    "breadcrumbs",
                    "home",
                    "form",
                    "common",
                  ]}
                  locale={locale}
                >
                  <Header />

                  {children}
                  <section className={styles["form-section"]}>
                    <div className="container">
                      <Form main={true} />
                    </div>
                  </section>
                  <section className={styles["map-section"]}>
                    <div className="container">
                      <div className={styles["map-card"]}>
                        <div className={styles["map-office"]}>
                          {/* <div>Где мы находимся</div> */}
                          <div>{t("title")}</div>
                          <div>
                            <div className={styles["map-office__icon"]}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="22"
                                fill="none"
                              >
                                <path
                                  fill="#fff"
                                  fillRule="evenodd"
                                  d="M6.468.065A7.58 7.58 0 0 0 .382 5.232C-.392 7.619-.016 9.848 1.75 13.34c1.055 2.088 2.332 4.117 4.106 6.524C6.598 20.872 7.479 22 7.524 22c.018 0 .258-.295.532-.655 3.27-4.284 5.752-8.567 6.583-11.358.315-1.059.362-1.375.361-2.412-.001-.804-.016-1.013-.104-1.424-.622-2.929-2.676-5.145-5.473-5.907-.874-.238-2.068-.31-2.955-.179Zm1.92 4.365c1.082.335 1.878 1.15 2.219 2.272.149.49.149 1.257 0 1.746-.369 1.206-1.184 2.005-2.353 2.303-.736.188-1.67.055-2.325-.33-.67-.392-1.173-1.015-1.456-1.799-.112-.308-.122-.39-.122-1.024 0-.638.009-.717.126-1.057.285-.826.88-1.516 1.629-1.884.553-.272.916-.348 1.538-.323.277.01.606.053.743.096Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className={styles["map-office__key"]}>
                              {t("address")}:
                            </div>
                            <div className={styles["map-office__val"]}>
                              {t("common:address") /*г. Уфа, Зарге 19/1*/}
                            </div>
                          </div>
                          <div>
                            <div className={styles["map-office__icon"]}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                              >
                                <path
                                  fill="#fff"
                                  d="M7.803 4.417C7.553 1.533 4.544.118 4.417.06A.64.64 0 0 0 4.035.01C.562.586.04 2.607.019 2.69a.65.65 0 0 0 .013.354c4.142 12.852 12.75 15.235 15.58 16.018.218.06.398.109.534.154a.65.65 0 0 0 .474-.028c.087-.04 2.132-1.003 2.632-4.145a.654.654 0 0 0-.063-.401c-.045-.087-1.114-2.123-4.08-2.842a.641.641 0 0 0-.58.138c-.937.8-2.23 1.651-2.787 1.739-3.74-1.828-5.828-5.337-5.906-6.002-.046-.374.81-1.688 1.796-2.756a.655.655 0 0 0 .171-.503Z"
                                />
                              </svg>
                            </div>
                            <div className={styles["map-office__key"]}>
                              {t("number")}:
                            </div>
                            <div className={styles["map-office__val"]}>
                              <a href="tel:+78007005413">+7 (800) 700 54-13</a>
                            </div>
                          </div>
                          <div>
                            <div className={styles["map-office__icon"]}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                              >
                                <path
                                  fill="#fff"
                                  fillRule="evenodd"
                                  d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm1-15a1 1 0 0 0-2 0v4.586A2 2 0 0 0 9.586 11l2.707 2.707a1 1 0 0 0 1.414-1.414L11 9.586V5Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className={styles["map-office__key"]}>
                              {t("schedule")}:
                            </div>
                            <div
                              className={styles["map-office__val"]}
                              dangerouslySetInnerHTML={{
                                __html: t("common:schedule", {
                                  interpolation: { escapeValue: false },
                                }),
                              }}
                            >
                              {/* <span>Пн-Пт, с 08:00 до 18:00,</span>
											<span>Сб-Вс, выходной</span> */}
                              {/* {t('common:schedule')} */}
                            </div>
                          </div>
                        </div>
                        <div className={styles["map-card__social"]}>
                          <div>{t("subscribe")}</div>
                          <div className={styles["map-card__social-list"]}>
                            <a
                              href="https://web.telegram.org/k/#@visotaUSR13"
                              className={styles["map-card__social-icon"]}
                            >
                              <img src="/svgs/map-social-telegram.svg" />
                            </a>
                            <a
                              href="https://vk.com/id827831209"
                              className={styles["map-card__social-icon"]}
                            >
                              <img src="/svgs/map-social-vk-icon.svg" />
                            </a>
                            <a
                              href="https://www.youtube.com/@Uralsnabresurs"
                              className={styles["map-card__social-icon"]}
                            >
                              <img src="/svgs/map-social-yt-icon.svg" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["map-iframe"]}>
                      <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa83dadbb5494c6e7a0ab513fdab6d3eaa2bef6bef0caff41ff803dddaa94beb8&amp;source=constructor&scroll=false"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                      ></iframe>
                    </div>
                  </section>
                  <Footer locale={locale} />
                </TranslationsProvider>
              </CartProvider>
            </ShowFormProvider>
          </BreadCrumbsProvider>
        </CategoriesProvider>

        <Script id="metrika-counter" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(98546151, "init", {
              defer:true,
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
          });`}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/98546151"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Suspense fallback={<></>}>
          <YandexMetrika />
        </Suspense>
      </body>
    </html>
  );
}

const getCategories = async (locale) => {
  const response = await fetch(
    process.env.BACK_URL + `/${locale}/api/catalog/categories/`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error(response.status + " запрос не удался");
  }

  return await response.json();
};
