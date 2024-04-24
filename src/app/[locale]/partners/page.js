import PartnersTabs from "@/components/Partners/PartnersTabs";
import initTranslations from "@/locales/i18n";
import s from "@/styles/partners.module.css";

export default async function Partners({params: {locale}}) {
    const {t} = await initTranslations(locale, ['partners'])
    return (
        <div className={`first-screen ${s.partners}`}>
            <div className="container">
                <h1 className={s.title}>{t('partners:title')}</h1>
                <PartnersTabs />
            </div>
        </div>
    );
}
