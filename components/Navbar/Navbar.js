import React from 'react'
import Link from 'next/link'
import styles from '../Navbar/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>Tourisme en Avesnois</h1>
      <div className={styles.link}>
        <Link href='/'><a>Accueil</a></Link>
        <Link href='/event'><a>Événements</a></Link>
        <Link href='/tourisme'><a>Tourisme</a></Link>
        {/* <Link href='/hébergement'><a>Hébergement</a></Link> */}
        <Link href='/contact'><a>Contact</a></Link>
      </div>

    </nav>
  )
}
