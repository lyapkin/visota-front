"use client";
import React, { useEffect, useState } from "react";

import styles from "./footer.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const FooterCatalog = () => {
    const [activateToggle, setActivateToggle] = useState(null)
    const {t} = useTranslation()

    useEffect(() => {
        const activateToggle = document.documentElement.clientWidth <= 576;
        setActivateToggle(activateToggle)
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
                {t('common:catalog')}{" "}
                {activateToggle && (
                    <img src="/svgs/arrow-footer-icon.svg" alt="стрелка" />
                )}
            </h6>
            <ul>
                <li>
                    <Link href={"/catalog?sub=komplektuyushie-k-stroitelnym-lesam&search=&price_min=&price_max="}>
                        {t('common:complect')}
                    </Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=nepovorotnyj&sub=povorotnyj&sub=homut-stykovochnyj&sub=homut-fiksiruyushij&sub=homut-balochnyj&sub=homut-k-doske&sub=bolt-t-obraznyj&sub=homut-k-lestnice"}>
                        {t('common:homuti')}
                    </Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=gajka-vaterstop&sub=zamok-klinovoj&sub=zamok-bfd-ocinkovannyj&sub=gajka-dlya-vintovoj-opory&sub=gajka-styazhnaya-trehrozhkovaya-ocinkovannaya&sub=gajka-styazhnaya-dvuhrozhkovaya-ocinkovannaya-90mm&sub=gajka-sharnirnaya&sub=vint-styazhnoj-1-m-08-m-15-m-2m&sub=gajka-malaya-barashkovayakrylchataya&sub=fiksatory-armatury"}>
                        {t('common:opalub_complect')}
                    </Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=opalubka-perekrytij"}>
                        {t('common:opalubka_perkrit')}
                    </Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=klinovye-lesa&sub=chashechnye-lesa&sub=homutovye-lesa"}>
                        {t('common:stroyles')}
                    </Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=truby-vgp"}>
                        {t('common:trubi_vgp')}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default FooterCatalog;
