import React from "react";
import styles from './services.module.css';

const OurServices: React.FC = () => {
    const services = [
        'Технический надзор','Техническое обследование',
        'Сопровождение проектов по ДДУ','Разработка и адаптация техкарт',
        'Геологические изыскания','Топосъемка','Управление проектами',
        'Финансовотехнический аудит','Услуги ПТО','Проектирование',
    ];
    return (
    <footer className={styles.servicesContainer}>
        <h2 className={styles.title}>Наши услуги</h2>
        <div className={styles.services}>
            {services.map((item,index)=>(
                <li key={index} className={styles.servicesItem}>{item}</li>
            ))}
        </div>
    </footer>
);
};

export default OurServices;
