import Link from "next/link";
import Headings from "../../components/homepage/heading/headings";
import Collection5 from "../../components/homepage/imagea_05/images_05";
import { images } from "../../data/users2";
function ImageBlock5(props) {
  var imageconte = props?.uiLayout?.elements;
  var heading = props?.uiLayout?.elements;
    return (
     
       <div>
         
     
 <Headings head={imageconte} />

<Collection5  set={imageconte}/>
  
   
  
  </div>
   
  
    )}
    export default ImageBlock5;
  