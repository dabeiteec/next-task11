import React from "react";
import style from '../styles/subtitle.module.css'

const  Subtitle:React.FC  =()=> {
  return (
    <section className={style.subtitle}>
      <h1 className={style.title} >Технический надзор и обследование в Казахстане</h1>
      <div>
        <h2 >
          Оставьте заявку и получите:
        </h2>
        <h2>
        Бесплатный Тех. Аудит с подробным отчетом
        </h2>
      </div>
      <button>
        Отправить
      </button>
    </section>
  );
}
export default Subtitle;