'use client'
import React,{useState} from "react";
import { FaWhatsappSquare, FaPhoneSquareAlt } from "react-icons/fa";
import styles from '../styles/header.module.css';
import { TransparentButton } from "src/shareds/button/button";

const Header: React.FC = () => {
  const [isActivePopUp, setIsActivePopUp] = useState(false);

  const handlePopUp =()=>{
    setIsActivePopUp((prev)=>!prev)
  }

  return (
    <header className={styles.header}>
      <h1>Engineering Services</h1>
      <div className={styles.callContainer}>
        <TransparentButton currentClick={handlePopUp} label="Заказать обработанный звонок"/>
        <div className={isActivePopUp? styles.acrive:styles.inactive}>
          <div className={styles.contactServices}>
            <FaWhatsappSquare className={styles.whatsappIcon}/>
            <FaPhoneSquareAlt className={styles.phoneIcon}/>
          </div>
          <span >+7(919) 876-54-32</span>
        </div> 
      </div>
    </header>
  );
};

export default Header;
