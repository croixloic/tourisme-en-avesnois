import React from 'react'
import Image from "next/image";
import styles from '../tourisme/styles.module.css'
import img1 from '../../public/assets/img/tourisme.jpg'
import { FaLink } from 'react-icons/fa';
import { v4 as uuidv4 } from "uuid";

export default function index(props) {
  return (
    <section className={styles.tourisme}>
        <h1>Tourisme</h1>
        <br />
        <div className={styles.image}>
          <Image 
                      layout="responsive"
                      placeholder="blur"
                      src={img1}
                      alt="courant de l'helpe à Maroilles"
                      width="1350"
                      height="759"
                      />
        </div>
          <h2 className={styles.subtitle}>Nos conseils visites</h2>
        <div className={styles.info}>
        {props.array.map(content => (
          <div className={styles.infoItem} key={uuidv4()}> 
          <h3>{content.name}</h3>
          <span>Adresse : {content.adresse} {content.ville}</span>
          <span>Téléphone : {content.phone}</span>
          <p>Informations : {content.description1} {content.description2}</p>
          <span>Site web : <a href={content.site} target="blank"><FaLink/>Cliquer ici</a></span>
         </div> 
        ))}
        </div>
    </section>
  )
}

export async function getStaticProps(){
  const data = await import('/data/tourismes.json')
  const array = await data.tourisme
  return {
    props:{
      array
    }
  }
}
