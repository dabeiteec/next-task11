'use client'
import React from "react";
import style from '../../global/styles/subtitle.module.css'
import LinkButton from "src/shareds/button/button";
import openVideo from "src/feature/youtube";

const  SubtitleArticle:React.FC  =()=> {
  const youtubeLink = 'https://youtu.be/zsK36BYAxr0';

  return (
    <section className={style.subtitle}>
      {/* TODO убрать класс сабтайтл */}
      <span >9 Лет на рынке, 121 инженер в штате, 255 объектов</span>
      <LinkButton label="Посмотрите видео о нас"
        path={youtubeLink}
        currentClick={openVideo}/>
    </section>
  );
}
export default SubtitleArticle;