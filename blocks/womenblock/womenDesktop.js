import Link from "next/link";
import Headings from "../../components/homepage/heading/headings";
import Sidecard from "../../components/homepage/sidecard/sidecard";
import Slide from "../../components/homepage/slider/slider";
import { CSlider } from "../../data/userslider";
import Slidee from "../../mobilecomponent/slider1/slider1";
import ImageBlock5 from "../imageblock5/imageblock5";
function WomenDesktop(props) {
    return (
     
          <div>
               <div className="py-5" > 
 <Slide set={CSlider} />
 </div>
<Sidecard />
<ImageBlock5/>

<ImageBlock5/>
<ImageBlock5/>

<Headings heading="CATEGORIES TO BAG" />
<Slidee/> 
{/* <Slider2 /> */}

<ImageBlock5/>
<ImageBlock5/>
<ImageBlock5/>
    </div>



       
   
  
   )}
   export default WomenDesktop;
 