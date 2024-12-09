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
    </article>
  );
}
export default AboutEngineers;