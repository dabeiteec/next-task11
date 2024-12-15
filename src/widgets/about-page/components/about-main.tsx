import React from "react";
import MainButton from "src/shareds/button/button";
import flex from '../../../shareds/styles/flex.module.css'
import styles from '../styles/main.module.css';
import margin from '../../../shareds/styles/margin.module.css'

const AboutMain: React.FC = () => {
    const arr = [
        'Анализируем Ваш проект, помогаем исключить определенные процессы без потери качества,улучшить или исправить ранее принятые решения.',
        'Объясняем как сэкономить, использовать более выгодные и не менее качественные материалы.',
        'Проводим дни качества с присутствием директоров со стороны заказчика, генподрядчика, субподрядчика.Каждый видит объективную картину.Это дисциплинирует, повышает качество, снижает вероятность ошибки и экономит деньги на ее исправление.'
    ];
    return (
        <article className={`${styles.container} ${margin.marginVertical} ${flex.flexColumn}`}>
            <h2>Работая с нами вы экономите</h2>
            <ul className={`${styles.list} ${flex.flexColumn}`}>
                {arr.map((item,index)=>(<p key={index} className={styles.arrItem}>{item}</p>))}
            </ul>
            <h3>Отправьте ваш проект для аудита</h3>
            <MainButton label="Отправить проект"/>
        </article>
    );
};

export default AboutMain;
