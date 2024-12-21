import React from "react";
import  Header  from 'src/widgets/global/components/header'
import AboutMain from "src/widgets/about/components/about-main";
import ITSystem from "src/widgets/about/components/it-system";
import Documentation from "src/widgets/about/components/documentation";
import SubtitleArticle from "src/widgets/home/components/subtitle-article";
import AboutEngineers from "src/widgets/home/components/about";
import HomeFooter from "src/widgets/home/components/prezentation";
import OurServices from "src/widgets/services/services";
import Licence from "src/widgets/licence/lincence";
import ContactForm from "../widgets/global/components/contact-form";

const  MainPage:React.FC  =()=> {
    return (
    <div>
        <Header/>
        <ContactForm/>
        <SubtitleArticle/>
        <AboutEngineers/>
        <HomeFooter/>
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