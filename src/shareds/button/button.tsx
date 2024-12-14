import React from "react";
import styles from './button.module.css'


interface ButtonProp{
    label:string,

}

const MainButton:React.FC<ButtonProp>= ({label})=>{
    return(
        <button className={styles.mainButton}>
            {label}
        </button>
    )
}
export default MainButton;