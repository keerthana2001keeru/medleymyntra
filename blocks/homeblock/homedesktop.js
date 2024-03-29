import Headings from "../../components/homepage/heading/headings";
import Sidecard from "../../components/homepage/sidecard/sidecard";
import Slide from "../../components/homepage/slider/slider";
import { slideeimg } from "../../data/users5";
import { CSlider } from "../../data/userslider";
import Slidee from "../../mobilecomponent/slider1/slider1";
import ImageBlock8 from "../imageblock8/imageblock8";
import SlideBlock from "../slideblock";
import SlideeHeading from "../slideeheading/slideeheading";

function HomeDesktop() {
    return (
     
      <div>
      <SlideBlock />
      <Sidecard />
      <ImageBlock8/>
      <ImageBlock8/>
      <SlideeHeading/>
      <ImageBlock8/>
      <ImageBlock8/>
     
      <SlideeHeading/>
      <ImageBlock8/>
      <ImageBlock8/>
      <ImageBlock8/>
     
   

       </div>  
    
    
  )
}
export default HomeDesktop; 