import Link from "next/link";
import Headings from "../../components/homepage/heading/headings";
import Collection8 from "../../components/homepage/imagea_08/images_08";

import { images } from "../../data/users2";







function ImageBlock8(props) {
  var imagecon = props?.uiLayout?.elements;
  var headin = props?.uiLayout?.elements;
    return (
     
       <div>
         
     
 <Headings head={headin} />

 <Collection8  set={imagecon}/>  
   
   
  
  </div>
   
  
    )}
    export default ImageBlock8;
  