import React from 'react'
import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'
export default function Header() {
  return (
    <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
            <Link href="/">
                <Image src="/Netflix.png" alt='Logo Image' width={150} height={80}/>
            </Link>
        </div>
        <Navbar/>
    </header>
  )
}
