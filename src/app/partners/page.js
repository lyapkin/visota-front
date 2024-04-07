import PartnersTabs from "@/components/Partners/PartnersTabs";
import s from "@/styles/partners.module.css";

export default function Partners() {
    return (
        <div className={`first-screen ${s.partners}`}>
            <div className="container">
                <h1 className={s.title}>Партнёрам</h1>
                <PartnersTabs />
            </div>
        </div>
    );
}
