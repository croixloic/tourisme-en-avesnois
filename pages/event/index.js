import React from "react";
import styles from "../event/styles.module.css";
import Image from "next/image";
import img1 from "../../public/assets/img/secrete.jpg";
import img2 from "../../public/assets/img/event.jpg";
import img3 from "../../public/assets/img/market.jpg";
import Link from "next/link";

export default function index() {
  return (
    <section>
      <div className={styles.container}>
        <h1>Découvrer les évenements à ne surtout pas manquer</h1>
        <div className={styles.firstimg}>
          <Image
            layout="responsive"
            alt = "évènement des nuits secretes"
            placeholder="blur"
            src={img1}
            width="930"
            height="620"
          />
        </div>
      </div>
      <div className={styles.cardBlack}>
        <p>Consultez nos évenements sans plus tarder</p>
      </div>
      <div className={styles.activite}>
        <div className={styles.imgActivite}>
          <Image
            layout="responsive"
            placeholder="blur"
            src={img2}
            alt= "evenement"
            width="3987"
            height="2658"
          />
          <Image
            layout="responsive"
            placeholder="blur"
            alt="marcher aux légumes"
            src={img3}
            width="7655"
            height="5106"
          />
          <div className={styles.txt} id={styles.event}>
            <div className="txtContent1">
              <Link href="/event">
                <a>
                  <h3>Agenda des évènements</h3>
                  <p className={styles.txtFirst}>
                    Pour ne rien manquer des grands événements en Hauts de
                    France que vous soyez plutôt festivals, braderies,
                    carnavals, ou rassemblements sportifs et culturels, les
                    grandes fêtes se succèdent toute l&apos;année dans l&apos;agenda
                    régional. Découvrez les grands événements en Avesnois.
                  </p>
                  <span className={styles.alerte}>
                    Cette fonctionnalité n&apos;est pas encore disponible. Le
                    développement est en cours
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.txt}>
            <div className="txtContent">
              <Link href="/event/marcher">
                <a>
                  <h3>Les marchés hebdomadaire prés de chez vous</h3>
                  <p className={styles.txtFirst}>
                    Trouver les marchés les plus proches de chez vous pour le
                    jour même, le lendemain ou tout autre jour. L&apos;ensemble des
                    marchés permanents, les marchés d&apos;été, les marchés bio pour
                    votre ville ou votre lieu de vacances !
                  </p>
                  <span className={styles.alerte}> En savoir plus</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
