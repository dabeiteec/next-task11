import React from "react";
import  Header  from '../widgets/global/header'
import  Subtitle  from '../widgets/homepage/components/subtitle'
import SubtitleArticle from "src/widgets/homepage/components/subtitle-article";
import AboutEngineers from "src/widgets/homepage/components/about";
import TechicalSupervision from "src/widgets/homepage/components/technical-supervision";

const  HomePage:React.FC  =()=> {
    return (
      <div>
       <Header/>
       <Subtitle/>
       <SubtitleArticle/>
       <AboutEngineers/>
       <TechicalSupervision/>
      </div>
    );
  }
export default HomePage;