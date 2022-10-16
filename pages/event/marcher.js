import React from 'react'
import styles from '../event/marcher.module.css'
import { v4 as uuidv4 } from "uuid";

export default function marcher(props) {
    console.log(props);
  return (
    <section className={styles.marcher}>
        <h1>Nos marcher locaux</h1>
        <div className={styles.marcherCard}>
            {props.array.map(content => (
                <div key={uuidv4()} className={styles.marcherItem}>
                <em>{content.ville}</em>
                <p>adresse: {content.adresse} : {content.ville}</p>
                <p>{content.jour} {content.horaire}</p>
                <span>{content.nbrexposants}</span>
                </div>
            ))}
        </div>
    </section>
  )
}
export async function getStaticProps(){
    const data = await import('/data/marcher.json')
    const array = await data.marcher
    return {
        props: {
            array
        }
    }
}
