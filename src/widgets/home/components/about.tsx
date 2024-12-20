import React from "react";
import style from '../styles/about.module.css'


const  AboutEngineers:React.FC  =()=> {
  return (
    <article className={style.aboutCase}>
        <div className={style.aboutEngineers}>
            <h2>Наши инженера не:</h2>
            <ul>
                <li>Не берут взятки</li>
                <li>Не принимают работы с закрытыми глазами</li>
                <li>Ещё один пункт списка</li>
            </ul>
        </div>
        <h1>Наши иженеры проходят полиграф</h1>
        <p>
            Наши технадзоры постоячнно на объекте - это минимизирует ошибки и экономит деньги на их исправление.
            </p>
            <div>
                <span>У нас отдельный технадзор по:</span>
                <ul>
                    <li>Электрике и слаботочным системам</li>
                    <li>Фасаду</li>
                    <li>Отоплению, вентиляции, водоснабжению, канализации</li>
                    <li>Благоустройству и дорожному строительству</li>
                </ul>
            </div>
    </article>
  );
}
export default AboutEngineers;