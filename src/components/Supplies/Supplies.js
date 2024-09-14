import styles from "@/styles/home.module.css";
import GovClientsSlider from "../Slider/GovClientsSlider";
import ThanksSlider from "../Slider/ThanksSlider";

export default function Supplies() {
  return (
    <section className={styles["home-clients"]}>
      <div className="container">
        <div className={styles["home-clients__gov-clients"]}>
          <h2 className={styles["home-sections-header"]}>
            Осуществляем комплектации объектов{" "}
            <span>крупнейших государственных компаний</span>
          </h2>
          <GovClientsSlider />
        </div>
        <div className={styles["home-clients__thanks-letters"]}>
          <h2>Благодарственные письма</h2>
          <ThanksSlider />
        </div>
      </div>
    </section>
  );
}
