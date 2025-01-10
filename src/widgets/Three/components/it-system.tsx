'use client'
import React,{ SetStateAction } from "react";
import MainButton from "src/shareds/button/button";
import styles from '../styles/it.module.css';
import flex from '../../../shareds/styles/flex.module.css'

interface ModalPropse{
    setActive: React.Dispatch<SetStateAction<boolean>>;
}

const ITSystem:  React.FC<ModalPropse> = ({setActive}) => {

    const arr = [
        'Вы удаленно контролируете подрядчиков.Все замечания видны в онлайнрежиме.',
        'Повышает ответственность и дисциплину подрядчиков	',
        'Позволяет выявлять систематические ошибки и исправлять их',
    ];

    const handleOpenModal = ()=>{
        setActive(true)
    }

    return (
        <article className={`${styles.container}  ${flex.flexColumn}`}>
            <div className={flex.flexColumn}>
                <h2>СОБСТВЕННАЯ IT СИСТЕМА</h2>
                <h2 style={{marginTop:'50px'}}>
                    ВСЕ ПРОЦЕССЫ НА ПРОЕКТЕ ПРОЗРАЧНЫ
                </h2>
            </div>
            <ul className={`${styles.list}  ${flex.flexRow  }`}>
                {arr.map((item,index)=>(
                    <p key={index} className={styles.itCard}>
                        {item}
                    </p>))
                }
            </ul>
            <MainButton label="Отправить проект" currentClick={handleOpenModal}/>
        </article>
    );
};

export default ITSystem;
