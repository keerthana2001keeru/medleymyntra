import Link from "next/link";
import Collection3 from "../../components/homepage/imagea_03/images_03";
import Collection5 from "../../components/homepage/imagea_05/images_05";
import Sidecard from "../../components/homepage/sidecard/sidecard";
import Getinspired from "../../components/livingpage/getinspired/getinspired";
import Livingimage from "../../components/livingpage/livingimage/livingimage";
import Livingsidesection from "../../components/livingpage/livingsidesection/livingsidesection";
import { Bannerimg } from "../../data/bannerdata";
import { collecti3 } from "../../data/collect3";
import { collecti5 } from "../../data/collect5";
import { livingimg } from "../../data/livingimagedata";
import { images } from "../../data/users2";
import Banner from "../../mobilecomponent/slider1/banner";

function LivingSection(props) {
  var imagecontent = props?.uiLayout?.elements;
 var imagecontene = props?.uiLayout?.elements;


    return (
       <div>
   <div className="container">
 <div className="row">
 <div className="col-lg-9">
  <Livingimage set={imagecontene}/>  
</div>
<div className="col-lg-3">
 <Livingsidesection set={imagecontent} />
 </div>
  </div>
  </div>
         </div>
   )}
   export default LivingSection;
 