import React from "react";
import style from '../../global/styles/subtitle.module.css'

export const  SubtitleArticle:React.FC  =()=> {
  return (
    <section className={style.subtitle}>
      <span >9 Лет на рынке, 121 инженер в штате, 255 объектов</span>
      <button>
        Посмотрите видео о нас
      </button>
    </section>
  );
}
export default SubtitleArticle;