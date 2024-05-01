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

    const [isOpen, setIsOpen] = useState(activateToggle ? true : false);
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
                    <Link href={"/catalog?sub=komplektuiushchie-k-stroitelnym-lesam&search=&price_min=&price_max="}>
                        {t('common:complect')}
                    </Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=khomut-nepovorotnyi&sub=khomut-povorotnyi&sub=khomut-stykovochnyj&sub=khomut-fiksiruiushchii&sub=khomut-balochnyi&sub=khomut-k-doske&sub=bolt-t-obraznyi&sub=khomut-k-lestnitse"}>
                        {t('common:homuti')}
                    </Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=gaika-vaterstop&sub=zamok-klinovoi-otsinkovannyi&sub=zamok-bfd-otsinkovannyi&sub=gajka-dlya-vintovoj-opory&sub=gaika-stiazhnaia-trekhrozhkovaia-otsinkovannaia&sub=gaika-stiazhnaia-dvukhrozhkovaia-otsinkovannaia&sub=gaika-sharnirnaia&sub=vint-stiazhnoi&sub=gaika-malaia-barashkovaiakrylchataia&sub=fiksatory-armatury"}>
                        {t('common:opalub_complect')}
                    </Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=opalubka-perekrytii"}>
                        {t('common:opalubka_perkrit')}
                    </Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=klinovye-lesa&sub=chashechnye-lesa&sub=khomutovye-lesa"}>
                        {t('common:stroyles')}
                    </Link>
                </li>
                <li>
                    <Link href={"/catalog?sub=truby-dlia-stroitelnykh-lesov"}>
                        {t('common:trubi_vgp')}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default FooterCatalog;
