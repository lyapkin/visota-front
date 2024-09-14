"use client";
import React from "react";

import styles from "./Header.module.css";
import NavLinks from "./NavLinks";
import Link from "next/link";

const MobileNav = ({ mobileOpen, close }) => {
  return (
    <div
      className={`${styles["header__mobile-nav"]} ${
        mobileOpen && styles["open"]
      }`}
      onClick={close}
    >
      <div
        className={`${styles["mobile-nav__layout"]} ${
          mobileOpen && styles["open"]
        }`}
      >
        <NavLinks />
      </div>
      <div className={styles["header__social-list"]}>
        <Link
          href="https://web.telegram.org/k/#@visotaUSR13"
          className={styles["header__social-icon"]}
        >
          <img src="/svgs/map-social-telegram.svg" />
        </Link>
        <Link
          href="https://web.telegram.org/k/#@visotaUSR13"
          className={styles["header__social-icon"]}
        >
          <img src="/svgs/map-social-vk-icon.svg" />
        </Link>
        <Link
          href="https://www.youtube.com/@Uralsnabresurs"
          className={styles["header__social-icon"]}
        >
          <img src="/svgs/map-social-yt-icon.svg" />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
