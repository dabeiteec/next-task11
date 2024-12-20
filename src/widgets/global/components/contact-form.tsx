'use client'
import React, { useState } from "react";
import  Subtitle  from 'src/widgets/global/components/subtitle'
import ModalWindow from "src/widgets/global/components/modal-window";

const  ContactForm:React.FC  =()=> {
    const [active,setActive] = useState(false)

    const handleActiveModal= ()=>{
        setActive(false)
    }

    return (
    <div>
        <Subtitle active={active} setActive={setActive}/>
        <ModalWindow active={active} setActive={setActive}/>
    </div>
    );
}

export default ContactForm;