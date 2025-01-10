'use client'
import React,{ChangeEvent, useState, useEffect } from 'react';
import styles from './input.module.css'
import phoneValidator from 'src/feature/phone-validator';

interface StyledInput{
    placeholder?:string;
    type:string;
}

const StyledInput:React.FC<StyledInput>= ({placeholder,type})=>{
    const [inputValue,setInputValue] = useState('');

    const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        phoneValidator(newValue)
    } 

    return (<input className={styles.styledInput} 
    placeholder={placeholder} 
    onChange={handleInputValue}
    type={type} value={inputValue}/>
    )
}
export default StyledInput;