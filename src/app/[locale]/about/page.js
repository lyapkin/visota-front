import Image from "next/image";
import i1 from "@/../public/images/about/i1.png";
import i2 from "@/../public/images/about/i2.png";
import c1 from "@/../public/images/about/case1.svg";
import c2 from "@/../public/images/about/case2.svg";
import c3 from "@/../public/images/about/case3.svg";
import c4 from "@/../public/images/about/case4.svg";
import groupImg from "@/../public/images/about/group.png";
import meImg from "@/../public/images/about/main.png";
import v from "@/../public/images/about/v.svg";
import aboutImg from "@/../public/images/about/about.png";
import check1 from "@/../public/images/about/check1.png";
import check2 from "@/../public/images/about/check2.png";
import check3 from "@/../public/images/about/check3.png";
import s from "@/styles/about.module.css";
import Button from "@/components/UI/Buttons/Button";
import DeliverySection from "@/components/DeliverySection/DeliverySection";
import AboutSection from "@/components/AboutSection/AboutSection";
import Supplies from "@/components/Supplies/Supplies";
import initTranslations from "@/locales/i18n";
import ShowMore from "@/components/showMore/ShowMore";

export default async function About({ params: { locale } }) {
    const { t } = await initTranslations(locale, ['home'])
    return (
        <>
            <div className={`${s.about} first-screen`}>
                <div className="container">
                    {/* <Image className={s.img} src={groupImg} /> */}
                    <div className={s['about__video']}>
                        <h6>{t('home:about.video')}</h6>
                        <video controls="controls" poster='/images/home-about-video-preview.jpg'>
                            <source src="/videos/visota.mp4" type="video/mp4" codecs="avc1.42E01E, mp4a.40.2" />
                        </video>
                    </div>
                    <h1 className={s.title}>О компании - высота</h1>
                    <p className={s.text}>
                        Ваш надежный поставщик комплектующих для строительных
                        объектов
                    </p>
                    <div className={s.items}>
                        <div className={s.item}>
                            <h4 className={s.item__title}>
                                Более <span>500 тысяч единиц товаров</span> на
                                складах
                            </h4>
                            <Image src={i1} />
                        </div>
                        <div className={s.item}>
                            <h4 className={s.item__title}>
                                Собственное <span>производство в Китае</span>
                            </h4>
                            <Image src={i2} />
                        </div>
                    </div>
                    <Button text={"Подробнее о компании"} />
                </div>
            </div>
            <div className={s.cases}>
                <div className="container">
                    <div className={s.cases__top}>
                        <h2 className={s.cases__title}>
                            ВЫСОТА это надежная компания по КОМПЛЕктации вашего
                            объекта
                        </h2>
                        <p className={s.cases__text}>
                            Компания «Высота» является ведущим поставщиком в
                            России и странах СНГ строительных лесов и опалубки,
                            а также комплектующих к ним. Мы производим
                            комплектующие на крупнейших заводах в Китае, что
                            позволяет нам предложить лучшие цены на рынке на
                            нашу продукцию. <br />
                            <br /> Комплектующие производятся на современном
                            оборудовании. Для эффективной защиты от коррозии
                            обрабатываются методом гальванического цинкования.
                            Вся продукция соответствует российским и
                            международным стандартам качества, имеет
                            неограниченный срок службы. <br />
                            <br /> Наш складской комплекс находится в г. Москва
                            в непосредственной близости от МКАД, что
                            обеспечивает транспортную доступность и высокую
                            скорость отправки заказов. Продукция в большом
                            ассортименте находится в наличии на наших складах.
                        </p>
                    </div>
                    <h4 className={s.cases__subtitle}>Ценности компании</h4>
                    <div className={s.cases__items}>
                        <div className={s.cases__item}>
                            <Image className={s.cases__item__margin} src={c1} />
                            <h5 className={s.cases__item_title}>
                                Надежная команда
                            </h5>
                            <p className={s.cases__item_text}>
                                Основная цель Компании — оперативное,
                                качественное обеспечение крупнейших промышленных
                                строительных площадок по всей России и странам
                                СНГ строительным оборудованием
                            </p>
                        </div>
                        <div className={s.cases__item}>
                            <Image src={c2} />
                            <h5 className={s.cases__item_title}>
                                ответственность
                            </h5>
                            <p className={s.cases__item_text}>
                                Взаимодействие Компании с партнерами базируется
                                на высокой степени доверия и безопасности на
                                высоте. Эти принципы, подкрепленные широким
                                ассортиментом, гибкой политикой ценообразования,
                                высокими стандартами сервиса
                            </p>
                        </div>
                        <div className={s.cases__item}>
                            <Image src={c3} />
                            <h5 className={s.cases__item_title}>
                                Безопасность
                            </h5>
                            <p className={s.cases__item_text}>
                                Мы существуем, чтобы строительство было
                                безопасным, быстрым и качественным. Мы ежедневно
                                стремимся стать надежным партнером и
                                предоставить наилучшее обслуживание своим
                                заказчикам.
                            </p>
                        </div>
                        <div className={s.cases__item}>
                            <Image src={c4} />
                            <h5 className={s.cases__item_title}>
                                Проффесионализм
                            </h5>
                            <p className={s.cases__item_text}>
                                Знание своей специальности, ответственное и
                                добросовестное отношение к обязанностям,
                                качественное и своевременное выполнение
                                поставленных задач, и совершенствование
                                профессионального уровня.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.me}>
                <div className="container">
                    <div className={s.me__inner}>
                        <div className={s.me__inner_left}>
                            <h3 className={s.me__title}>
                                Здравствуйте! Меня зовут Мамлиев Ильшат Римович,
                                и от себя лично я гарантирую:
                            </h3>
                            <p className={s.me__text}>
                                Компания «Высота» является ведущим поставщиком в
                                России и странах СНГ строительных лесов и
                                опалубки, а также комплектующих к ним.
                            </p>
                        </div>
                        <div className={s.me__img}>
                            <Image src={meImg} />
                        </div>
                        <div>
                            <p className={s.me__info}>
                                Основная цель Компании — оперативное,
                                качественное обеспечение крупнейших промышленных
                                строительных площадок по всей России и странам
                                СНГ строительным оборудованием и сопутствующими
                                товарами, постоянное улучшение и развитие
                                условий постав
                            </p>
                            <div className={s.me__info_items}>
                                <div className={s.me__item}>
                                    <h6 className={s.me__item_title}>
                                        Ильшат Римович
                                    </h6>
                                    <p className={s.me__item_subtitle}>
                                        Директор компании
                                    </p>
                                </div>
                                <div className={s.me__item}>
                                    <Image src={v} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.me__items_bottom}>
                        <div className={s.me__item_bottom}>
                            <h5>
                                Крупный, надежный поставщик строительного
                                оборудования
                            </h5>
                            <p>
                                Сайт рыбатекст поможет дизайнеру, верстальщику,
                                вебмастеру сгенерировать несколько абзацев более
                                менее осмысленного текста рыбы на русском языке,
                                а начинающему
                            </p>
                        </div>
                        <div className={s.me__item_bottom}>
                            <h5>
                                Крупный, надежный поставщик строительного
                                оборудования
                            </h5>
                            <p>
                                Сайт рыбатекст поможет дизайнеру, верстальщику,
                                вебмастеру сгенерировать несколько абзацев более
                                менее осмысленного текста рыбы на русском языке,
                                а начинающему
                            </p>
                        </div>
                        <div className={s.me__item_bottom}>
                            <h5>
                                Крупный, надежный поставщик строительного
                                оборудования
                            </h5>
                            <p>
                                Сайт рыбатекст поможет дизайнеру, верстальщику,
                                вебмастеру сгенерировать несколько абзацев более
                                менее осмысленного текста рыбы на русском языке,
                                а начинающему
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.command}>
                <div className="container">
                    <div className={s.command__inner}>
                        <h3 className={s.command__title}>
                            Команда из 35 сотрудников, минимальный стаж работы
                            каждого специалиста 6 + лет
                        </h3>
                        <p className={s.command__text}>
                            Комплектующие производятся на современном
                            оборудовании. Для эффективной защиты от коррозии
                            обрабатываются методом гальванического цинкования.
                            Вся продукция соответствует российским и
                            международным стандартам качества, имеет
                            неограниченный срок службы.
                        </p>
                    </div>
                    <Image src={groupImg} />
                </div>
            </div>
            <DeliverySection />
            <AboutSection />
            <section className={s.prod}>
                <div className="container">
                    <div className={s.prod__inner}>
                        <Image src={aboutImg} />
                        <div>
                            <h4 className={s.prod__title}>
                                Компания «Высота» (ООО «Уралснабресурс»)
                                является производителем строительных лесов в
                                Китае на заводах TYT CO. LTD
                            </h4>
                            <div className={s.prod__text}>
                                <ShowMore height={'290px'}>
                                    <p>
                                        TYT CO. LTD разрабатывает и предлагает решения для ваших проектов. Полный
                                        ассортимент строительных лесов, опалубки и средств безопасности для строительной и промышленной
                                        отрасли.
                                    </p>
                                    <p>
                                        Как профессиональный производитель строительных лесов, особенно поставщик проектных
                                        решений, TYT CO. LTD может поставлять клиентам ряд систем строительных лесов, которые
                                        могут соответствовать Вашим отраслям и применениям. Неважно, трубчатые, модульные или
                                        опалубочные системы, все они могут быть интегрированы с системами строительных лесов
                                        TYT CO. LTD.
                                    </p>
                                    <p>
                                        Более 90% нашей продукции экспортируется в Европу, Северную Америку, Южную
                                        Америку, Австралию и Средний Восток, с местными сертификатами качества в соответствии
                                        с требованиями клиентов. Так же, как протокол испытаний хомутов EN74, сертификат систем
                                        SGS, и протколы испытаний строительных лесов AS / NZS 1576.
                                    </p>
                                    <p>
                                        Tianjin TianYingTai Steel Pipe Co., Ltd., основанная в 2007 году, является профессиональным
                                        предприятием, занимающимся производством стальных труб.
                                    </p>
                                    <p>
                                        Компания располагает 14 линиями по производству различных типов оцинкованных
                                        стальных труб, 10 линиями по производству стальных труб глубокой переработки и 2
                                        линиями по производству горячего цинкования для защиты окружающей среды с годовым
                                        объемом производства более 600000 тонн оцинкованных стальных труб различных типов.
                                    </p>
                                    <p>
                                        Наша продукция включает в себя полные наборы систем лесов: Модульные,
                                        системы Чашечные, системы Рамные, системы лесов Штыревые, различных видов хомутов и
                                        аксессуаров для лесов, опор для крепления и опалубки и многоедругое.

                                    </p>
                                    <p>
                                        У нас есть собственные физико-химические лаборатории для проверки химического состава
                                        сырья для строительных лесов, физических свойств продуктов. Для обеспечения того, чтобы
                                        строительные леса соответствовали стандарту качества 100% от производства до доставки.
                                    </p>
                                </ShowMore>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.check}>
                <div className="container">
                    <h4 className={s.check__title}>
                        Проверка <br /> качества
                    </h4>
                    <div className={s.check__items}>
                        <div className={s.check__item}>
                            <Image src={check1} />
                            <h6 className={s.check__item_title}>
                                Физико химический <br /> анализ
                            </h6>
                            <p className={s.check__item_text}>
                                У нас есть собственные физико-химические
                                лаборатории для проверки химического состава
                                сырья. Чтобы строительные леса соответствовали
                                стандарту качества 100% от производства до
                                доставки.
                            </p>
                        </div>
                        <div className={s.check__item}>
                            <Image src={check2} />
                            <h6 className={s.check__item_title}>
                                Производство по ГОСТ
                            </h6>
                            <p className={s.check__item_text}>
                                Наша продукция соответствует нормам и
                                производится в соответствии с: ГОСТ Р
                                58752-2019, ГОСТ Р 58755-2019, ГОСТ Р
                                58758-2019, ГОСТ 27321-2018
                            </p>
                        </div>
                        <div className={s.check__item}>
                            <Image src={check3} />
                            <h6 className={s.check__item_title}>
                                Анализ на вязкость, скручивание, разрыв
                            </h6>
                            <p className={s.check__item_text}>
                                Сайт рыбатекст поможет дизайнеру, верстальщику,
                                вебмастеру сгенерировать несколько абзацев более
                                менее осмысленного текста рыбы на русском языке
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Supplies />
        </>
    );
}
