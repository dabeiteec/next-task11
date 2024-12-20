import React,{ SetStateAction } from "react";
import style from '../styles/subtitle.module.css'
import {SubtitleButton} from "src/shareds/button/button";

interface ModalPropse{
  active:boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

const  Subtitle:React.FC<ModalPropse> = ({active,setActive})=>{

  const handleOpenModal = ()=>{
    console.log (active)
    setActive(true)
}
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
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
            <SubtitleButton label="Отправить" currentClick={handleOpenModal}/>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Subtitle;