import Link from "next/link";
import Headings from "../../components/homepage/heading/headings";
import Collection4 from "../../components/homepage/imagea_04/images_04";
import Collection5 from "../../components/homepage/imagea_05/images_05";
import Sidecard from "../../components/homepage/sidecard/sidecard";
import Slide from "../../components/homepage/slider/slider";
import { picture } from "../../data/users3";
import { slideeimg } from "../../data/users5";
import { CSlider } from "../../data/userslider";
import Slidee from "../../mobilecomponent/slider1/slider1";
import ImageBlock4 from "../imageblock4/imageblock4";
import ImageBlock5 from "../imageblock5/imageblock5";
function MenDesktop(props) {
    return (
     
       <div>
         
         <div className="py-5" > 
         <Slide set={CSlider} />
         </div>
         <Sidecard />
      <ImageBlock4/>
{/* <div className="d-lg-none">
    <Slide/> 
    </div> */}

<Headings heading="BEST OF MEDLEY EXCLUSIVE BRANDS" />
<Slidee  set={slideeimg}/> 
<ImageBlock4/>
<Collection4  set={picture}/>

<ImageBlock5/>
<ImageBlock5/>
<Collection5/>
<ImageBlock5/>

<ImageBlock5/>

 
  
  </div>
   
  
    )}
    export default MenDesktop;
  