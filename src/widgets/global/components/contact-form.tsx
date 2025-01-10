'use client'
import React, { useState } from "react";
import  Subtitle  from 'src/widgets/global/components/subtitle'
import ModalWindow from "src/widgets/global/components/modal-window";
import AboutMain from "src/widgets/Three/components/about-main";
import ITSystem from "src/widgets/Three/components/it-system";

const  ContactForm:React.FC  =()=> {
    const [active,setActive] = useState(false)

    return (
    <div>
        <Subtitle  setActive={setActive}/>
        <ModalWindow active={active} setActive={setActive}/>
    </div>
    );
}
export const  ProjectForm:React.FC  =()=> {
    const [active,setActive] = useState(false)

    return (
    <div>
        <AboutMain  setActive={setActive}/>
        <ModalWindow active={active} setActive={setActive}/>
    </div>
    );
}

export const  ProccessForm:React.FC  =()=> {
    const [active,setActive] = useState(false)

    return (
    <div>
        <ITSystem  setActive={setActive}/>
        <ModalWindow active={active} setActive={setActive}/>
    </div>
    );
}

export default ContactForm;