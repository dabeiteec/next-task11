import React from "react";
import styles from '../styles/documentation.module.css';
import grid from '../../../shareds/styles/grid.module.css'
import flex from '../../../shareds/styles/flex.module.css'
import margin from '../../../shareds/styles/margin.module.css'


const Documentation: React.FC = () => {
    const arr = [
        'Земляные','Кровельные','Сварочные',
        'Отделочные','Монолитные ','Свайные',
        'Монтажные','Гидроизоляционные','Каменные',
        'Спец работы (Электрика, Сантехника)'
    ];
    return (
        <footer className={`${styles.container} ${flex.flexColumn} ${margin.marginVertical}`}>
            <h2>Приводим в порядок документацию по всем видам работ:</h2>
            <ul className={`${styles.list} ${grid.gridTwoColumn}`}>
                {arr.map((item,index)=>(<li key={index}>{item}</li>))}
            </ul>
        </footer>
    );
};

export default Documentation;
