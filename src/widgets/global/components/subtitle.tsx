import React from "react";
import style from '../styles/subtitle.module.css'
import MainButton from "src/shareds/button/button";

const  Subtitle:React.FC  =()=> {
  return (
    <section className={style.subtitle}>
      <h1 className={`${style.title} ${style.marginTop} ${style.marginBottom}`}>
        Технический надзор и обследование в Казахстане
      </h1>
      <div className={style.align}>
        <h2 className={style.subText}>
          Оставьте заявку и получите:
        </h2>
        <h2 className={style.subText}>
        Бесплатный Тех. Аудит с подробным отчетом
        </h2>
      </div>
      <div  className={`${style.marginTop} ${style.marginBottom}`}>
        <MainButton label="Отправить"/>
      </div>
    </section>
  );
}
export default Subtitle;