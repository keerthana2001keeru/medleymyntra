import Link from "next/link";
import Sidecard from "../../components/homepage/sidecard/sidecard";
import Slide from "../../components/homepage/slider/slider";
import { CSlider } from "../../data/userslider";
import ImageBlock2 from "../imageblock2/imageblock2";
import ImageBlock3 from "../imageblock3/imageblock3";
import ImageBlock4 from "../imageblock4/imageblock4";
import ImageBlock5 from "../imageblock5/imageblock5";
function KidsDesktop(props) {
    return (
     
       <div>
            <div className="py-5" > 
         <Slide set={CSlider} />
         </div>
        <Sidecard />
           <ImageBlock4/>
           <ImageBlock5/>
           <ImageBlock2/>
           {/* <ImageBlock3/> */}
           <ImageBlock5/>
           <ImageBlock2/>
           <ImageBlock5/>
           <ImageBlock5/>
           <ImageBlock5/>



         </div>
   
  
   )}
   export default KidsDesktop;
 