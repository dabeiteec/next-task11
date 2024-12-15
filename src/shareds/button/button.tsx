import React from "react";
import styles from './button.module.css'


interface ButtonProp{
    label:string,

}

const MainButton:React.FC<ButtonProp>= ({label})=>{
    return(
        <button className={`${styles.button} ${styles.mainButton}`}>
            {label}
        </button>
    )
}
export const SubtitleButton:React.FC<ButtonProp>= ({label})=>{
    return(
        <button className={`${styles.button} ${styles.subtitleButton}`}>
            {label}
        </button>
    )
}
export default MainButton;