import React from "react";
import  Header  from '../../widgets/global/components/header'
import  Subtitle  from '../../widgets/global/components/subtitle'
import AboutMain from "src/widgets/about-page/components/about-main";
import ITSystem from "src/widgets/about-page/components/it-system";
import Documentation from "src/widgets/about-page/components/documentation";

const  AboutPage:React.FC  =()=> {
    return (
    <div>
        <Header/>
        <Subtitle/>
        <AboutMain/>
        <ITSystem/>
        <Documentation/>
    </div>
    );
}
export default AboutPage;