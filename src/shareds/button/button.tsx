import React from "react";
import styles from './button.module.css'

interface ButtonProp{
    label:string,
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
export const TransparentButton:React.FC<ButtonProp>= ({label,currentClick})=>{
    return(
        <button onClick={currentClick} className={styles.transparentButton }>
                {label}
        </button>
    )
}
export default MainButton;