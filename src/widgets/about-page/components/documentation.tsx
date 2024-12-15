import React from "react";
// import styles from '../styles/documentation.module.css';
import styles from '../styles/main.module.css';


const Documentation: React.FC = () => {
    const arr = [
        'Земляные','Кровельные','Сварочные',
        'Отделочные','Монолитные ','Свайные',
        'Монтажные','Гидроизоляционные','Каменные',
        'Спец работы (Электрика, Сантехника)'
    ];
    return (
        <footer className={`${styles.container} ${styles.margin}`}>
            <h2>Работая с нами вы экономите</h2>
            <ol className={styles.list}>
                {arr.map((item,index)=>(<li key={index} className={styles.arrItem}>{item}</li>))}
            </ol>
        </footer>
    );
};

export default Documentation;
