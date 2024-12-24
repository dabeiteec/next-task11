'use client'
import React, { useState, useEffect } from "react";
import { FaWhatsappSquare, FaPhoneSquareAlt } from "react-icons/fa";
import { TransparentButton } from "src/shareds/button/button";
import styles from '../styles/header.module.css';
import flex from '../../../shareds/styles/flex.module.css';

const Header: React.FC = () => {
  const [isActivePopUp, setIsActivePopUp] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePopUp = () => {
    setIsActivePopUp((prev) => !prev);
  };

  return (
    <header className={`${flex.flexRow} ${styles.header}`}>
      <h1>Engineering Services</h1>
      <nav className={styles.callContainer}>
        {isMobileView ? (
          <div/>
        ) : (
          <TransparentButton currentClick={handlePopUp} label="Заказать обработанный звонок" />
        )}
        <div className={isActivePopUp ? styles.active : styles.inactive}>
          <div className={styles.contactServices}>
            <FaWhatsappSquare className={styles.whatsappIcon} />
            <FaPhoneSquareAlt className={styles.phoneIcon} />
          </div>
          <span>+7(919) 876-54-32</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
