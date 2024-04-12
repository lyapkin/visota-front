import styles from "@/styles/home.module.css";
import AboutAchievements from "../Home/about/AboutAchievements";

export default function AboutSection() {
    return (
        <section className={styles["home-about"]}>
            <div className="container">
                <div className={styles["home-about__video"]}>
                    <h6>Смотрите видео о нас</h6>
                    <video
                        controls="controls"
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
                    <h2 className={styles["home-sections-header"]}>
                        Компания «Высота» -{" "}
                        <span className={styles["home-about__header-bold"]}>
                            ведущий поставщик
                        </span>{" "}
                        В РФ и СНГ{" "}
                        <span className={styles["home-about__header-blue"]}>
                            строительных лесов и опалубки
                        </span>
                    </h2>
                    <div>
                        <p>
                            Мы производим комплектующие на крупнейших заводах в
                            Китае, что позволяет нам предложить лучшие цены на
                            рынке на нашу продукцию. Комплектующие производятся
                            на современном оборудовании.
                        </p>
                        <p>
                            Мы производим комплектующие на крупнейших заводах в
                            Китае, что позволяет нам предложить лучшие цены на
                            рынке на нашу продукцию. Комплектующие производятся
                            на современном оборудовании.
                        </p>
                    </div>
                </div>
                <AboutAchievements />
            </div>
        </section>
    );
}
