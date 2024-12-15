import React from "react";
import MainButton from "src/shareds/button/button";
import margin from '../../../shareds/styles/margin.module.css'
import flex from '../../../shareds/styles/flex.module.css'

const Prezentation:React.FC= ()=>{
    return(
        <footer className={`${margin.marginVertical} ${flex.flexColumn}`}>
           <h2>Скачать презентацию</h2>
           <MainButton label='Скачать'/>
        </footer>
    )
}
export default Prezentation;