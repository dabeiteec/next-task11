'use client'
import React from "react";
import MainButton from "src/shareds/button/button";
import margin from '../../../shareds/styles/margin.module.css'
import flex from '../../../shareds/styles/flex.module.css'
import { handleDownload } from "src/feature/download-prez";

const Prezentation:React.FC= ()=>{
    return(
        <footer className={`${margin.marginVertical} ${flex.flexColumn}`}>
            <h2>Скачать презентацию</h2>
            <MainButton label='Скачать' currentClick={handleDownload}/>
        </footer>
    )
}
export default Prezentation;