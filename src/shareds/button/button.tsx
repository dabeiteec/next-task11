import React from "react";
import styles from './button.module.css'


interface ButtonProp{
    label:string,
    path?:string,
    currentClick?:()=> void,
}

const MainButton:React.FC<ButtonProp>= ({label})=>{
    // const staticPhone = "8001234567"; // Статичный номер телефона
    // const handleWhatsAppRedirect = () => {
    //     const encodedMessage = encodeURIComponent(message || ""); // Кодируем текст сообщения
    //     const whatsappUrl = `https://wa.me/${staticPhone}?text=${encodedMessage}`;
    //   window.open(whatsappUrl, "_blank"); // Открываем WhatsApp в новой вкладке
    // };  
    return(
        <button className={`${styles.button} ${styles.mainButton}`}>
            {label}
        </button>
    )
}
export const SubtitleButton:React.FC<ButtonProp>= ({label,currentClick})=>{
    return(
        <button onClick={currentClick} className={`${styles.button} ${styles.subtitleButton}`}>
            {label}
        </button>
    )
}
export const LinkButton:React.FC<ButtonProp>= ({label,path})=>{
    return(
        <button className={styles.mainButton}>
            <a href={path}>{label}</a>
        </button>
    )
}
export default MainButton;