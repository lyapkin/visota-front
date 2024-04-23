import Image from "next/image";
import flag from "@/../public/images/conctacts/flag.png";
import call from "@/../public/images/conctacts/call.svg";
import s from "@/styles/contacts.module.css";

export default function Contacts() {
    return (
        <div className={`first-screen`}>
            <div className="container">
                <h1 className={s.title}>Контакты</h1>
                <div className={s.items}>
                    <div className={s.item}>
                        <h5 className={s.item__title}>Офис продаж и выставочный зал</h5>
                        <div className={s.flag}>
                            <div className={s.flag__img}>
                                <Image src={flag} />
                            </div>
                            <div>
                                {/* <p className={s.flag__title}>
                                    Торговая точка и офис
                                </p> */}
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
                                <h4 className={`${s.subtitle} ${s.tel__title}`}>
                                    Телефон
                                </h4>
                                <div className={s.tel__number}>
                                    <div className={s.tel__img}>
                                        <Image src={call} />
                                    </div>
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
                                <p className={s.tel__text}>
                                    Проектирование, монтаж и другие вопросы
                                </p>
                            {/* <div className={s.tel__right}>
                                <p className={s.tel__text}>
                                    Проектирование, монтаж и другие вопросы
                                </p>
                                
                            </div> */}
                        </div>
                        <div className={s.email}>
                            <h4 className={`${s.subtitle}`}>Почта</h4>
                            <p className={s.email__text}>
                                <a href="mailto:visota1300@mail.ru">
                                    visota1300@mail.ru
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <h5 className={s.item__title}>Реквизиты</h5>
                        <p className={s.item__text}>
                            Общество с ограниченной ответственностью «Уралснабресурс» <br />
                            ИНН 0277050347 <br />
                            КПП 027601001 <br />
                            ОГРН 1020203090038
                            <br />
                            Номер свидетельства о регистрации: 02 №006689731
                            {/* ЕГРЮЛ 116965814096 от 09.12.2016г. ????? */}
                            <br />
                            Код по ОКПО: 55835677
                            <br />
                            Банк: ФИЛИАЛ "НИЖЕГОРОДСКИЙ" АО "АЛЬФА-БАНК"
                            <br />
                            БИК: 042202824
                            <br />
                            Рас.счет: 40702810629300009834
                            <br />
                            Кор.счет: 30101810200000000824
                            <br />
                            Юридический адрес: Республика Башкортостан, г.Уфа, 450059,
                            <br />
                            ул. Рихарда Зорге, 15/1
                            <br />
                            Почтовый адрес: Республика Башкортостан, г. Уфа, 450059,
                            <br />
                            ул. Рихарда Зорге, 19/1
                            <br />
                            Директор: Мамлиев Ильшат Римович (на основании
                            Устава)
                        </p>
                    </div>
                    <div className={s.item}>
                        <h5 className={s.item__title}>Склад Санкт-Петербург</h5>
                        <div className={s.flag}>
                            <div className={s.flag__img}>
                                <Image src={flag} />
                            </div>
                            <div>
                                {/* <p className={s.flag__title}>
                                    Торговая точка и офис
                                </p> */}
                                <p className={s.flag__text}>
                                    г. Санкт-Петербург, пр. Обуховской обороны, д. 295, лит.АТ, логопарк «Троицкий»
                                </p>
                            </div>
                        </div>
                        {/* <div className={s.time}>
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
                                <h4 className={`${s.subtitle} ${s.tel__title}`}>
                                    Телефон
                                </h4>
                                <div className={s.tel__number}>
                                    <div className={s.tel__img}>
                                        <Image src={call} />
                                    </div>
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
                                <p className={s.tel__text}>
                                    Проектирование, монтаж и другие вопросы
                                </p>
                            <div className={s.tel__right}>
                                <p className={s.tel__text}>
                                    Проектирование, монтаж и другие вопросы
                                </p>
                                
                            </div>
                        </div>
                        <div className={s.email}>
                            <h4 className={`${s.subtitle}`}>Почта</h4>
                            <p className={s.email__text}>
                                <a href="mailto:visota1300@mail.ru">
                                    visota1300@mail.ru
                                </a>
                            </p>
                        </div> */}
                    </div>
                    <div className={s.item}>
                        <h5 className={s.item__title}>Склад Московская обл.</h5>
                        <div className={s.flag}>
                            <div className={s.flag__img}>
                                <Image src={flag} />
                            </div>
                            <div>
                                {/* <p className={s.flag__title}>
                                    Торговая точка и офис
                                </p> */}
                                <p className={s.flag__text}>
                                    Московская обл., Ногинский р-н,
                                    пгт. Обухово, Кудиновское ш., 4 корпус 27.
                                    ПСК "Атлант-Парк"
                                </p>
                            </div>
                        </div>
                        {/* <div className={s.time}>
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
                                <h4 className={`${s.subtitle} ${s.tel__title}`}>
                                    Телефон
                                </h4>
                                <div className={s.tel__number}>
                                    <div className={s.tel__img}>
                                        <Image src={call} />
                                    </div>
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
                                <p className={s.tel__text}>
                                    Проектирование, монтаж и другие вопросы
                                </p>
                            <div className={s.tel__right}>
                                <p className={s.tel__text}>
                                    Проектирование, монтаж и другие вопросы
                                </p>
                                
                            </div>
                        </div>
                        <div className={s.email}>
                            <h4 className={`${s.subtitle}`}>Почта</h4>
                            <p className={s.email__text}>
                                <a href="mailto:visota1300@mail.ru">
                                    visota1300@mail.ru
                                </a>
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
