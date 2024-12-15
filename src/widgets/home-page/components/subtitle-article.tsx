import React from "react";
import style from '../../global/styles/subtitle.module.css'
import MainButton from "src/shareds/button/button";

export const  SubtitleArticle:React.FC  =()=> {
  return (
    <section className={style.subtitle}>
      {/* TODO убрать класс сабтайтл */}
      <span >9 Лет на рынке, 121 инженер в штате, 255 объектов</span>
      <MainButton label="Посмотрите видео о нас"/>
    </section>
  );
}
export default SubtitleArticle;