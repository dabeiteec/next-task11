import React from "react";
import  Header  from 'src/widgets/global/components/header'
import  Subtitle  from 'src/widgets/global/components/subtitle'
import AboutMain from "src/widgets/about-page/components/about-main";
import ITSystem from "src/widgets/about-page/components/it-system";
import Documentation from "src/widgets/about-page/components/documentation";
import SubtitleArticle from "src/widgets/home-page/components/subtitle-article";
import AboutEngineers from "src/widgets/home-page/components/about";
import HomeFooter from "src/widgets/home-page/components/prezentation";
import OurServices from "src/widgets/services-page/services";
import Licence from "src/widgets/licence-page/lincence";

const  MainPage:React.FC  =()=> {
    return (
    <div>
        <Header/>
        <Subtitle/>
        <AboutMain/>
        <ITSystem/>
        <Documentation/>
        <div>
            <Subtitle/>
            <SubtitleArticle/>
            <AboutEngineers/>
            <HomeFooter/>
        </div>
        <div>
            <Subtitle/>
            <OurServices/>
        </div>
        <div>
            <Licence/>
        </div>
    </div>
    );
}



export default MainPage;