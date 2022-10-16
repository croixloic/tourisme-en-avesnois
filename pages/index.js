import Head from "next/head";
import Image from "next/image";
import img1 from "../public/assets/img1bis.jpg";
import img2 from "../public/assets/img/imgbavay.jpg";
import img3 from "../public/assets/img/imgforet.jpg";
import styles from "../styles/Home.module.css";
import imgevent from "../public/assets/img/tissé.jpg";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function Home(props) {
  console.log(props);
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tourisme en avesnois</title>
      </Head>
      <section className="header">
        <div className={styles.firstimg}>
          <Image
            layout="responsive"
            placeholder="blur"
            src={img1}
            alt="scéne des nuits secretes"
            width="757"
            height="420"
          />
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.parc}>
          <h2>Au coeur d&apos;un parc naturel régional</h2>
          <p>
            Prairies bocagères, forêts de feuillus, vergers en fleurs, rivières
            sinueuses, moulins au bord de l&apos;eau, kiosques à danser au cœur des
            villages, oratoires en pierre bleue… font du Parc naturel régional
            de l&apos;Avesnois un territoire d’exception.
          </p>
        </div>
      </section>
      <section>
        <div className={styles.cardBlack}>
          <p>Consultez notre page tourisme pour ne rien rater </p>
        </div>
        <div className={styles.activite}>
          <div className={styles.imgActivite}>
            <Image
              layout="responsive"
              placeholder="blur"
              alt="Le site archéologique de Bavay"
              src={img2}
              width="675"
              height="485"
            />
            <Image
              layout="responsive"
              placeholder="blur"
              src={img3}
              alt="forêt Mormal et l'arboretum"
              width="2560"
              height="1707"
            />
            <div className={styles.txt} id={styles.bavay}>
              <div className="txtContent1">
                <Link href="/tourisme">
                  <a>
                    <h3>Le site archéologique</h3>
                    <p className={styles.txtFirst}>
                      Le forum antique de Bavay, musée archéologique du
                      Département du Nord. Vous allez découvrir les vestiges
                      d&apos;un site archéologique romain de 2,5 hectares, lieu
                      incontournable de la région Hauts-de-France.
                    </p>
                    <p>
                      Parfaite rencontre entre le passé et le présent, le forum
                      allie avec brio la présentation d’un site archéologique de
                      plus de 2 000 ans avec une architecture moderne. Vous êtes
                      invités à déambuler sur cet espace chargé d&apos;histoire, lieu
                      de rencontre autrefois privilégié par les Romains.
                    </p>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.txt}>
              <div className="txtContent">
                <Link href="/tourisme">
                  <a>
                    <h3>Forêt Mormal et l&apos;arboretum</h3>
                    <p className={styles.txtFirst}>
                      Avec ses 9 163 hectares, la Forêt de Mormal est le plus
                      grand massif forestier du département du Nord. Il est le
                      seul du Nord, à abriter une population de cervidé. La
                      Forêt de Mormal est idéale pour vous ressourcer grâce à
                      ses nombreux sentiers de randonnée, son cadre verdoyant et
                      les auberges forestières typiques.
                    </p>
                    <p>
                      Envie de vous ressourcer ? Rendez-vous à l&apos;arboretum. Ce
                      site de 10 hectares, niché au cœur de la forêt de Mormal,
                      a été réaménagé pour offrir aux promeneurs une balade
                      contemplative. Venez découvrir les arbres centenaires et
                      saluer Gargantua qui se trouve à l&apos;entrée du site.
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.cardBlack}>
          <p>Actuellement dans l&apos;avesnois</p>
        </div>
        <div className={styles.actualite}>
          <div className={styles.meteo}>
            <h3>Météo de : {props.results.name}</h3>
            {props.results.weather.map((item) => (
              <span key={uuidv4()}>
                Description du ciel: {item.description}
              </span>
            ))}

            <span>Température actuelle: {props.results.main.temp}°C</span>
            <span>
              Température maximale aujourd&apos;hui: {props.results.main.temp_max}°C
            </span>
            <span>Humidité: {props.results.main.humidity}%</span>
          </div>
          <div className={styles.firstActu}>
            <div className={styles.firstActuimg}>
              <Image
                layout="responsive"
                placeholder="blur"
                alt="exposition tisser le monde"
                src={imgevent}
                width="900"
                height="1200"
              />
            </div>
            <div className={styles.infoActu}>
              <h4>Exposition Tisser le monde</h4>
              <p>
                Tisser le monde est une
                exposition dédiée au tissage artisanal. Étoffes et outils de
                tous les continents montrent une impressionnante diversité de
                couleurs, matières et motifs, en même temps que des convergences
                étonnantes dans les techniques.
              </p>
              <span>Adresse: Musée du textile et de la vie sociale  59610 FOURMIES</span>
              <br />
              <span className={styles.date}>jusqu&apos;au 4 décembre</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export async function getServerSideProps() {
  const data =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Avesnes-sur-Helpe&lang=fr&appid=d9bbc94840be5c13011bcf52a913a166&units=metric
  `);
  const results = await data.json();
  return {
    props: {
      results,
    },
  };
}
