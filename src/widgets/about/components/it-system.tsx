import React from "react";
import MainButton from "src/shareds/button/button";
import styles from '../styles/it.module.css';
import flex from '../../../shareds/styles/flex.module.css'

const ITSystem: React.FC = () => {
    const arr = [
        'Вы удаленно контролируете подрядчиков.Все замечания видны в онлайнрежиме.',
        'Повышает ответственность и дисциплину подрядчиков	',
        'Позволяет выявлять систематические ошибки и исправлять их',
    ];
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
            <MainButton label="Отправить проект"/>
        </article>
    );
};

export default ITSystem;
