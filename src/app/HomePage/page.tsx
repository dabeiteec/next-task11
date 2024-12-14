import React from "react";
import  Header  from '../../widgets/global/components/header'
import  Subtitle  from '../../widgets/global/components/subtitle'
import SubtitleArticle from "src/widgets/home-page/components/subtitle-article";
import AboutEngineers from "src/widgets/home-page/components/about";
import HomeFooter from "src/widgets/home-page/components/prezentation";

const  HomePage:React.FC  =()=> {
    return (
      <div>
        <Header/>
        <Subtitle/>
        <SubtitleArticle/>
        <AboutEngineers/>
        <HomeFooter/>
      </div>
    );
  }
export default HomePage;