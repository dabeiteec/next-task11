'use client'
import React from "react";
import LinkButton from "src/shareds/button/button";
import openVideo from "src/feature/youtube";
import style from '../styles/article.module.css'
import flex from '../../../shareds/styles/flex.module.css'

const  SubtitleArticle:React.FC  =()=> {
  return (
    <section className={`${style.article} ${flex.flexColumn}`}>
      <span >9 Лет на рынке, 121 инженер в штате, 255 объектов</span>
      <LinkButton label="Посмотрите видео о нас" currentClick={openVideo}/>
    </section>
  );
}
export default SubtitleArticle;