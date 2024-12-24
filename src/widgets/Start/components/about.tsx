import React from "react";
import engineer from '../../../assets/engineers/engineers1.jpg'
import engineer2 from '../../../assets/engineers/engineers2.jpg'
import style from '../styles/about.module.css'
import flex from '../../../shareds/styles/flex.module.css'
import container from '../styles/container.module.css'

const  AboutEngineers:React.FC  =()=> {
    const tehNadzor=[''];
    const goodEngineers=[''];
    return (
        <article className={`${flex.flexColumn} ${style.aboutContainer}`}>
            <div className={`${flex.flexRow} ${container.container}`}>
                <div className={container.imgContainer}>
                    <img src={engineer.src} className={container.img} alt='engineers'/>
                </div>
                <div className={`${flex.about} ${style.gap}`}>
                    <div className={style.text}>
                        <h2 style={{marginBottom:'20px'}} className={style.title}>Наши инженера не:</h2>
                        <ul className={`${flex.flexColumn} ${style.gap}`} style={{alignItems:'start'}}>
                            <li>Не берут взятки</li>
                            <li>Не принимают работы с закрытыми глазами</li>
                            <li>Ещё один пункт списка</li>
                        </ul>
                    </div>
                    <h2 style={{marginTop:'20px'}}className={style.title}>Наши иженеры проходят полиграф</h2>
                </div>
            </div>
            <div className={`${flex.flexRow} ${container.container}`}>
                <div className={`${flex.about} ${style.gap}`}>
                    <p className={style.p} style={{marginBottom:'20px'}}>
                        Наши технадзоры постоячнно на объекте - <br/>это минимизирует ошибки и экономит деньги на их исправление.
                    </p>
                    <div className={style.text}>
                        <h2 className={style.title} style={{marginBottom:'20px'}} >
                            У нас отдельный технадзор по:
                        </h2>
                        <ul className={`${flex.flexColumn} ${style.gap}`} style={{alignItems:'end'}} >
                            <li>Электрике и слаботочным системам</li>
                            <li>Фасаду</li>
                            <li>Отоплению, вентиляции, водоснабжению, канализации</li>
                            <li>Благоустройству и дорожному строительству</li>
                        </ul>
                    </div>
                </div>
                <div className={container.imgContainer}>
                    <img src={engineer2.src} className={container.img}  alt='enginer'/>
                </div>
            </div>
        </article>
    );
}
export default AboutEngineers;