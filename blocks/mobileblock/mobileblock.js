import Slidee from "../../mobilecomponent/slider1/slider1";
import Slider2 from "../../mobilecomponent/slider1/banner";
import Banner from "../../mobilecomponent/slider1/banner";
import { slideeimg } from "../../data/users5";
import { Bannerimg } from "../../data/bannerdata";
import Slide from "../../components/homepage/slider/slider";
import { picture } from "../../data/users3";
import Headingmob from "../../components/homepage/heading/headingmob/headingmob";

export default function MobileBlock() {
    return (
      <>
    
      <Slidee set={slideeimg}/> 
     
      <Headingmob heading="DEAL OF THE DAY" />
      <Banner set={Bannerimg}  />
      <Slide  set={picture} />

      <Slidee set={slideeimg}/>
      <Banner set={Bannerimg}  />
      <Slide  set={picture} />
      <Slide  set={picture} />
      </>


    )}