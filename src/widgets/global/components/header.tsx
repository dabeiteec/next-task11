'use client';

import React, { useState, useEffect } from "react";
import { FaWhatsappSquare, FaPhoneSquareAlt } from "react-icons/fa";
import { TransparentButton } from "src/shareds/button/button";
import styles from '../styles/header.module.css';
import flex from '../../../shareds/styles/flex.module.css';
import handleWhatsAppRedirect from "src/feature/whats-app";

const Header: React.FC = () => {
  const [isActivePopUp, setIsActivePopUp] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false); // Изначально false
  const [isActivePhone, setIsActivePhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 450);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePhone = () => {
    setIsActivePhone((prev) => !prev);
  };

  const handlePopUp = () => {
    setIsActivePopUp((prev) => !prev);
  };

  return (
    <header className={`${flex.flexRow} ${styles.header}`}>
      <h1>Engineering Services</h1>
      <nav className={styles.callContainer}>
        {isMobileView ? (
          <div /> // Пустой контейнер для мобильной версии
        ) : (
          <TransparentButton currentClick={handlePopUp} label="Заказать обработанный звонок" />
        )}
        <div
          className={isActivePopUp ? styles.active : `${styles.inactive} ${flex.flexColumn}`}
        >
          <div className={`${styles.contactServices} ${flex.flexRow}`}>
            <FaWhatsappSquare
              className={styles.whatsappIcon}
              onClick={handleWhatsAppRedirect}
            />
            <FaPhoneSquareAlt className={styles.phoneIcon} onClick={handlePhone} />
          </div>
          {isActivePhone ? (
            <span>+7(919) 876-54-32</span>
          ) : (
            <div /> // Пустой элемент для ненужного отображения
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
