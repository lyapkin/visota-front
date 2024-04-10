"use client";
import React, { useEffect, useState } from "react";

import styles from "./footer.module.css";
import Link from "next/link";

const FooterCatalog = () => {
    let activateToggle = null;

    useEffect(() => {
        activateToggle = document.documentElement.clientWidth <= 576;
    }, []);

    const [isOpen, setIsOpen] = useState(activateToggle ? false : true);
    const handleClick = activateToggle
        ? () => setIsOpen((prev) => !prev)
        : () => {};

    return (
        <div
            className={`${styles["footer__catalog"]} ${
                isOpen && styles["open"]
            }`}
        >
            <h6 onClick={handleClick}>
                Каталог товаров{" "}
                {activateToggle && (
                    <img src="/svgs/arrow-footer-icon.svg" alt="стрелка" />
                )}
            </h6>
            <ul>
                <li>
                    <Link href={"/catalog?sub=komplektuyushie-k-stroitelnym-lesam&search=&price_min=&price_max="}>Комплектующие для строительных лесов</Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=nepovorotnyj&sub=povorotnyj&sub=homut-stykovochnyj&sub=homut-fiksiruyushij&sub=homut-balochnyj&sub=homut-k-doske&sub=bolt-t-obraznyj&sub=homut-k-lestnice"}>Хомуты</Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=gajka-vaterstop&sub=zamok-klinovoj&sub=zamok-bfd-ocinkovannyj&sub=gajka-dlya-vintovoj-opory&sub=gajka-styazhnaya-trehrozhkovaya-ocinkovannaya&sub=gajka-styazhnaya-dvuhrozhkovaya-ocinkovannaya-90mm&sub=gajka-sharnirnaya&sub=vint-styazhnoj-1-m-08-m-15-m-2m&sub=gajka-malaya-barashkovayakrylchataya&sub=fiksatory-armatury"}>Комплектующие для опалубки</Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=lestnicy"}>Лестницы</Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=klinovye-lesa&sub=chashechnye-lesa&sub=homutovye-lesa"}>Строительные леса</Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=truby-vgp"}>Трубы ВГП</Link>
                </li>
            </ul>
        </div>
    );
};

export default FooterCatalog;
