import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo2 from "../../public/assets/logo/nord.jpg";
import styles from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Image
          layout="responsive"
          placeholder="blur"
          alt="logo du Nord"
          src={logo2}
          width="88"
          height="35"
        />
      </div>
      <nav>
        <div className={styles.link}>
          <Link href="/event">
            <a>Événements</a>
          </Link>
          <Link href="/tourisme">
            <a>Tourisme</a>
          </Link>
          <Link href="/hébergement">
            <a>Hébergement</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
