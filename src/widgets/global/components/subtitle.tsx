import React,{ SetStateAction } from "react";
import style from '../styles/subtitle.module.css'
import MainButton from "src/shareds/button/button";
import flex from '../../../shareds/styles/flex.module.css'
import margin from '../../../shareds/styles/margin.module.css'
interface ModalPropse{
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

const  Subtitle:React.FC<ModalPropse> = ({setActive})=>{

  const handleOpenModal = ()=>{
    setActive(true)
}
  return (
      <div className={style.imgContainer}>
        <section className={`${style.subtitle} ${flex.flexColumn}`}>
          <h1 className={`${style.title} ${style.text} ${margin.marginTop} ${margin.marginBot}`}>
            Технический надзор и обследование в Казахстане
          </h1>
          <div className={flex.flexColumn}>
            <h2 className={`${style.subText} ${style.text}`}>
              Оставьте заявку и получите: Бесплатный Тех. Аудит с подробным отчетом
            </h2>
          </div>
          <div  className={`${margin.marginTop} ${margin.marginBot}`}>
            <MainButton label="Отправить" currentClick={handleOpenModal}/>
          </div>
        </section>
      </div>
  );
}
export default Subtitle;