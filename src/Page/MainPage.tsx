import React from "react";
import  Header  from 'src/widgets/global/components/header'
import AboutMain from "src/widgets/Three/components/about-main";
import ITSystem from "src/widgets/Three/components/it-system";
import Documentation from "src/widgets/Three/components/documentation";
import SubtitleArticle from "src/widgets/Start/components/subtitle-article";
import AboutEngineers from "src/widgets/Start/components/about";
import HomeFooter from "src/widgets/Start/components/prezentation";
import OurServices from "src/widgets/Second/services";
import Licence from "src/widgets/Last/lincence";
import ContactForm from "../widgets/global/components/contact-form";
import ProjectContainer from "src/widgets/Start/components/engineers-projects";

const  MainPage:React.FC  =()=> {
    return (
    <div>
        <Header/>
        <ContactForm/>
        <SubtitleArticle/>
        <AboutEngineers/>
        <HomeFooter/>
        <ProjectContainer/>
        <div>
            <ContactForm/>
            <AboutMain/>
            <ITSystem/>
            <Documentation/>
        </div>
        <div>
            <ContactForm/>
            <OurServices/>
        </div>
        <div>
            <Licence/>
        </div>
    </div>
    );
}



export default MainPage;