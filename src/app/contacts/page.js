import Image from "next/image";
import flag from "../../../public/images/conctacts/flag.png";
import call from "../../../public/images/conctacts/call.svg";
import s from "@/styles/contacts.module.css";

export default function Contacts() {
    return (
        <div className={`first-screen`}>
            <div className="container">
                <h1 className={s.title}>Контакты</h1>
                <div className={s.items}>
                    <div className={s.item}>
                        <h5 className={s.item__title}>Офис в городе УФА</h5>
                        <div className={s.flag}>
                            <div className={s.flag__img}>
                                <Image src={flag} />
                            </div>
                            <div>
                                <p className={s.flag__title}>
                                    Торговая точка и офис
                                </p>
                                <p className={s.flag__text}>
                                    г. Уфа ул. Зорге 19/1
                                </p>
                            </div>
                        </div>
                        <div className={s.time}>
                            <h4 className={s.subtitle}>Время работы</h4>
                            <div className={s.time__wrap}>
                                <p>
                                    Пн-Пт, с 09:00 до 21:00 <br /> Сб-Вс, с
                                    09:00 до 20:00
                                </p>
                                <p>Технический отдел: Круглосуточно</p>
                            </div>
                        </div>
                        <div className={s.tel}>
                            <div className={s.tel__left}>
                                <h4 className={`${s.subtitle} ${s.tel__title}`}>
                                    Телефон
                                </h4>
                                <div className={s.tel__img}>
                                    <Image src={call} />
                                </div>
                            </div>
                            <div className={s.tel__right}>
                                <p className={s.tel__text}>
                                    Проектирование, монтаж и другие вопросы
                                </p>
                                <a
                                    className={s.tel__link}
                                    href="tel:88007005413"
                                >
                                    8 800 700 54 13
                                </a>
                                <a
                                    className={`${s.tel__link} ${s.tel__link__light}`}
                                    href="tel:+79677828700"
                                >
                                    +7 (967) 782-87-00
                                </a>
                            </div>
                        </div>
                        <div className={s.email}>
                            <h4 className={`${s.subtitle}`}>Почта</h4>
                            <p className={s.email__text}>
                                <a href="mailto:Teplograd-kamensk@mail.ru">
                                    Teplograd-kamensk@mail.ru
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <h5 className={s.item__title}>Реквизиты</h5>
                        <p className={s.item__text}>
                            Общество с ограниченной ответственностью «ВЫСОТА»
                            ИНН 6612050947 <br />
                            КПП 661201001 <br />
                            ОГРН 1169658140596
                            <br />
                            ЕГРЮЛ 116965814096 от 09.12.2016г.
                            <br />
                            Банк: «ЕКАТЕРИНБУРГСКИЙ» АО «АЛЬФА-БАНК»
                            <br />
                            БИК 046577964
                            <br />
                            Рас.счет: 40702810438210000249
                            <br />
                            Кор.счет:30101810100000000964
                            <br />
                            Юридический адрес: 623408, Свердловская область,
                            г.Уфа
                            <br />
                            ул.Тевосяна, дом 4 кв.21
                            <br />
                            Фактический адрес: Свердловская область, г. Уфа
                            <br />
                            ул.Коммолодежи дом 24
                            <br />
                            Директор: Мамлиев Ильшат Римович (на основании
                            Устава)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
