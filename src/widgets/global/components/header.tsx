import React from "react";
import { FaWhatsappSquare, FaPhoneSquareAlt } from "react-icons/fa";
import styles from '../styles/header.module.css';
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Logo</h1>
      <div className={styles.navButton}>
        <Link href='/'>Home</Link>
        <Link href='/AboutPage'>About</Link>
        <Link href='/LicencePage'>Licence</Link>
        <Link href='/ServicesPage'>Services</Link>
        <div className={styles.callContainer}>
          <a>Заказать обработанный звонок</a>
          <div className={styles.contacts}>
            <div className={styles.contactServices}>
              <FaWhatsappSquare className={styles.whatsappIcon}/>
              <FaPhoneSquareAlt className={styles.phoneIcon}/>
            </div>
            <span >+7(919) 876-54-32</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
