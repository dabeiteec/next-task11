'use client'
import React,{ SetStateAction } from 'react';
import { IoClose } from "react-icons/io5";
import MainButton from 'src/shareds/button/button';
import StyledInput from 'src/shareds/input/input';
import styles from '../styles/modal-window.module.css'
import flex from '../../../shareds/styles/flex.module.css'
import handleWhatsAppRedirect  from 'src/feature/whats-app';

interface ModalPropse{
    active:boolean;
    setActive: React.Dispatch<SetStateAction<boolean>>;
}

const ModalWindow:React.FC<ModalPropse> = ({active,setActive})=>{
    const textlTypeModal={notTimer:'Напишите ваш номер телефона, чтобы зафиксировать скидку 30% и бесплатный технический аудит с пробным отчетом'}
    const handleCloseModal = ()=>{
        setActive(false)
    }
    const handleSaleClick=()=>{
        alert('Спасибо что выбрали нас!')
    }
    return(
        <section className={`${styles.modalContainer} ${flex.flexColumn} ${styles.modalBackdrop} ${active ? styles.active : ""}`}>
            <h3 className={styles.title}>{textlTypeModal.notTimer}</h3>
            <IoClose className={styles.closeIcon} onClick={handleCloseModal}/>
            <form className={`${styles.formContainer} ${flex.flexColumn}`}>
                <StyledInput type='number'/>
                <div className={`${styles.buttonContainer} ${flex.flexRow}`}>
                    <MainButton label='Получить скидку 30%' currentClick={handleSaleClick}/>
                    <MainButton label='Написать в WhatsApp' currentClick={handleWhatsAppRedirect}/>
                </div>
            </form>
        </section>
    )
}
export default ModalWindow;