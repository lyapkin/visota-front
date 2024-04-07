import s from "@/styles/pay.module.css";
import s2 from "@/styles/delivery.module.css";
import Link from "next/link";
import Image from "next/image";
import PayImage from "@/../public/images/pay/img.png";

export default function Pay() {
    return (
        <div className={`first-screen`}>
            <div className={`container ${s.pay}`}>
                <div className={s.wrap}>
                    <div>
                        <h1 className={s2.title}>
                            Обеспечиваем доставку <br /> авто и ж/д способом
                        </h1>

                        <div className={s2.btns}>
                            <Link href={"delivery"}>
                                <button className={`${s2.btn} `}>
                                    Доставка
                                </button>
                            </Link>
                            <Link href={"pay"}>
                                <button
                                    className={`${s2.btn} ${s2.btn__active}`}
                                >
                                    Оплата
                                </button>
                            </Link>
                        </div>
                        <h4 className={s.subtitle}>
                            Оплатить товар можно любым удобным для вас способом:
                        </h4>
                        <ul className={s.list}>
                            <li className={s.list__item}>
                                Наличный и безналичный расчет
                            </li>
                            <li className={s.list__item}>Рассрочка</li>
                            <li className={s.list__item}>Расчет на месте</li>
                            <li className={s.list__item}>
                                Товарный аккредитив
                            </li>
                            <li className={s.list__item}>
                                Работаем по 223-ФЗ и 44-ФЗ
                            </li>
                            <li className={s.list__item}>
                                Открываем спецсчета в банках
                            </li>
                            <li className={s.list__item}>
                                Отгружаем под банковские гарантии
                            </li>
                            <li className={s.list__item}>Отсрочки платежа</li>
                        </ul>
                    </div>
                    <div>
                        <Image className={s.img} src={PayImage} alt="Оплата" />
                    </div>
                </div>
                <h2 className={`${s2.title} ${s.title}`}>
                    Принимаем любые способы оплаты
                </h2>
                <p className={s.text}>
                    Рыбатекст используется дизайнерами, проектировщиками и
                    фронтендерами, когда нужно быстро заполнить макеты или
                    прототипы содержимым. Это тестовый контент, который не
                    должен нести никакого смысла, лишь показать наличие самого
                    текста или продемонстрировать типографику в деле. <br />
                    <br /> В своём стремлении повысить качество жизни, они
                    забывают, что убеждённость некоторых оппонентов представляет
                    собой интересный эксперимент проверки прогресса
                    профессионального сообщества. Картельные сговоры не
                    допускают ситуации, при которой действия представителей
                    оппозиции могут быть описаны максимально подробно!
                    Банальные, но неопровержимые выводы, а также многие
                    известные личности лишь добавляют фракционных разногласий и
                    ограничены исключительно образом мышления. Равным образом,
                    курс на социально-ориентированный национальный проект не
                    даёт нам иного выбора, кроме определения поставленных
                    обществом задач.
                </p>
            </div>
        </div>
    );
}
