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
                            Принимаем любые способы оплаты
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
                                Безналичный расчет с юр. лицами
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
                            <li className={s.list__item}>Отсрочки платежа и скидки постоянным клиентам</li>
                            <li className={s.list__item}>Особые условия для строительных и производственных компаний</li>
                        </ul>
                    </div>
                    <div>
                        <Image className={s.img} src={PayImage} alt="Оплата" />
                    </div>
                </div>
            </div>
        </div>
    );
}
