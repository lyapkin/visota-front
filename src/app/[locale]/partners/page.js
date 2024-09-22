import PartnersTabs from "@/components/Partners/PartnersTabs";
import initTranslations from "@/locales/i18n";
import s from "@/styles/partners.module.css";
import { pages } from "../../../../settings";
import {
  generateMetadataStatic,
  getStaticPageSEO,
} from "@/utils/generateMetadataUtil";

export const generateMetadata = async ({ params: { locale } }) => {
  const data = await getStaticPageSEO("partners", locale);

  const { PARTNERS: pathSegment } = pages;

  return generateMetadataStatic(pathSegment, locale, data);
};

export default async function Partners({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["partners"]);
  const data = await getStaticPageSEO("partners", locale);
  return (
    <div className={`first-screen ${s.partners}`}>
      <div className="container">
        <h1 className={s.title}>
          {data.translated ? data.header : t("partners:title")}
        </h1>
        <PartnersTabs />
      </div>
    </div>
  );
}
