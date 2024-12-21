import React from "react";
import styles from './button.module.css'

interface ButtonProp{
    label:string,
    path?:string,
    currentClick?:()=> void,
}

const MainButton:React.FC<ButtonProp>= ({label,currentClick})=>{
    return(
        <button  onClick={currentClick} className={`${styles.button} ${styles.mainButton}`}>
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
export const LinkButton:React.FC<ButtonProp>= ({label,currentClick})=>{
    return(
        <button onClick={currentClick} className={`${styles.button} ${styles.mainButton}`}>
                {label}
            </button>
    )
}
export default MainButton;