import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import styles from './header.module.css';

const  Header:React.FC  =()=> {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>CurrentLogo</h1>
      <div>
        <div>
          <FaWhatsappSquare />
          <FaPhoneSquareAlt />
          <span>+7(919) 876-54-32</span>
        </div>
        <a>Заказать обработанный звонок</a>
      </div>
    </header>
  );
}
export default Header;