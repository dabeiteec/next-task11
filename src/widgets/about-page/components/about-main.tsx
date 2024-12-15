import React from "react";
import styles from '../styles/main.module.css';
import MainButton from "src/shareds/button/button";


const AboutMain: React.FC = () => {
    const arr = [
        'Анализируем Ваш проект, помогаем исключить определенные процессы без потери качества,улучшить или исправить ранее принятые решения.',
        'Объясняем как сэкономить, использовать более выгодные и не менее качественные материалы.',
        'Проводим дни качества с присутствием директоров со стороны заказчика, генподрядчика, субподрядчика.Каждый видит объективную картину.Это дисциплинирует, повышает качество, снижает вероятность ошибки и экономит деньги на ее исправление.'
    ];
    return (
        <article className={`${styles.container} ${styles.margin}`}>
            <h2>Работая с нами вы экономите</h2>
            <ol className={styles.list}>
                {arr.map((item,index)=>(<li key={index} className={styles.arrItem}>{item}</li>))}
            </ol>
            <MainButton label="Скачать презентацию"/>
        </article>
    );
};

export default AboutMain;
