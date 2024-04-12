import ReputationBlocks from "../Home/reputation/ReputationBlocks";
import styles from "@/styles/home.module.css";

export default function DeliverySection() {
    return (
        <section className={styles["home-delivery"]}>
            <div className="container">
                <h2 className={styles["home-sections-header"]}>
                    Доставка <span>в любую точку</span>  России и стран СНГ
                </h2>
                <p>
                    Обеспечим поставку наших товаров в кратчайшие сроки со
                    склада в Москве, или привезем из Китая.
                </p>
                <div className={styles["home-delivery__map-contact-block"]}>
                    <div className={styles["home-delivery__delivery-map"]}>
                        <img src="/images/delivery-map.svg" alt="фон" />
                    </div>
                    <div className={styles["home-delivery__contact"]}>
                        <h4>Офис Уфа</h4>
                        <p>г. Уфа ул. Зорге 19/1</p>
                        <span>Пн-Пт, с 09:00 до 18:00,</span>
                        <span>Сб-Вс, Выходной</span>
                        <p>8 800 700 54 13</p>
                    </div>
                </div>
                <div className={styles["home-reputation"]}>
                    <h3 className={styles["home-sections-header"]}>
                        Надежная <span>репутация</span>, проверенная временем
                    </h3>
                    <p>Без предоплат и ожиданий</p>
                    <ReputationBlocks />
                </div>
            </div>
        </section>
    );
}
