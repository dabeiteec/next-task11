import React from "react";
import styles from '../styles/it.module.css';
import MainButton from "src/shareds/button/button";


const ITSystem: React.FC = () => {
    const arr = [
        'Вы удаленно контролируете подрядчиков.Все замечания видны в онлайнрежиме.',
        'Повышает ответственность и дисциплину подрядчиков	',
        'Позволяет выявлять систематические ошибки и исправлять их',
    ];
    return (
        <article className={`${styles.container} ${styles.margin}`}>
            <h2>Работая с нами вы экономите</h2>
            <ul className={styles.list}>
                {arr.map((item,index)=>(<li key={index} className={styles.arrItem}>{item}</li>))}
            </ul>
            <MainButton label="Отправить проект"/>
        </article>
    );
};

export default ITSystem;
