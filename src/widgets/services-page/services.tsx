import React from "react";
import styles from './services.module.css';
import flex from '../../shareds/styles/flex.module.css';
import grid from '../../shareds/styles/grid.module.css';


const OurServices: React.FC = () => {
    const services = [
        'Технический надзор','Техническое обследование',
        'Сопровождение проектов по ДДУ','Разработка и адаптация техкарт',
        'Геологические изыскания','Топосъемка','Управление проектами',
        'Финансовотехнический аудит','Услуги ПТО','Проектирование',
    ];
    return (
    <footer className={`${styles.servicesContainer} ${flex.flexColumn}`}>
        <h2 className={styles.title}>Наши услуги</h2>
        <ul className={`${styles.services} ${grid.gridTwoColumn}`}>
            {services.map((item,index)=>(
                <li key={index} className={styles.servicesItem}>{item}</li>
            ))}
        </ul>
    </footer>
);
};

export default OurServices;
