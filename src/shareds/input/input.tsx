'use client'
import React,{ChangeEvent, useState } from 'react';
import styles from './input.module.css'

interface StyledInput{
    placeholder?:string;
    type:string;
    // onChange?:(event: ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput:React.FC<StyledInput>= ({placeholder,type})=>{
    const [inputValue,setInputValue] = useState('');

    const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    } 

    return (<input className={styles.styledInput} 
    placeholder={placeholder} 
    onChange={handleInputValue}
    type={type} value={inputValue}/>
    )
}
export default StyledInput;