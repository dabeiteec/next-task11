import React from "react";
import Header from "src/widgets/global/components/header";
import Subtitle from "src/widgets/global/components/subtitle";
import OurServices from "src/widgets/services-page/services";

const ServicesPage:React.FC =()=>{
    return(
        <div>
            <Header/>
            <Subtitle/>
            <OurServices/>
        </div>
    )
}
export default ServicesPage;