'use client'
import React from "react";
import LinkButton from "src/shareds/button/button";
import engineer from '../../../assets/engineers/engineers.jpg'
import openVideo from "src/feature/youtube";
import style from '../styles/article.module.css'
import flex from '../../../shareds/styles/flex.module.css'
import container from '../styles/container.module.css'

const  SubtitleArticle:React.FC  =()=> {
  return (
    <section className={ `${flex.flexRow} ${container.container}`}>
      <div className={`${style.article} ${flex.flexColumn}`}>
        <span style={{textAlign:'center'}}>9 Лет на рынке, 121 инженер в штате, 255 объектов</span>
        <LinkButton label="Посмотрите видео о нас" currentClick={openVideo}/>
      </div>
      <div className={container.imgContainer}>
        <img alt='engineers'src={engineer.src} className={container.img}/>
      </div>
    </section>
    
  );
}

export default SubtitleArticle;