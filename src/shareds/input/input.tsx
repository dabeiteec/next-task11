'use client'
import React,{ChangeEvent } from 'react';
import styles from './input.module.css'

interface StyledInput{
    placeholder?:string;
    type:string;
    onChange?:(event: ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput:React.FC<StyledInput>= ({placeholder,onChange,type})=>{
    return (<input className={styles.styledInput} 
    placeholder={placeholder} 
    onChange={onChange}
    type={type}
    />
    )
}
export default StyledInput;