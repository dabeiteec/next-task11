import React from "react";
import  Header  from '../../widgets/global/header'
import  Subtitle  from '../../widgets/homepage/components/subtitle'
import SubtitleArticle from "src/widgets/homepage/components/subtitle-article";
import AboutEngineers from "src/widgets/homepage/components/about";
import HomeFooter from "src/widgets/homepage/components/prezentation";

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