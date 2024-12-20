import React from "react";
import style from '../../global/styles/subtitle.module.css'
import LinkButton from "src/shareds/button/button";

export const  SubtitleArticle:React.FC  =()=> {
  return (
    <section className={style.subtitle}>
      {/* TODO убрать класс сабтайтл */}
      <span >9 Лет на рынке, 121 инженер в штате, 255 объектов</span>
      <LinkButton label="Посмотрите видео о нас" path=""/>
    </section>
  );
}
export default SubtitleArticle;