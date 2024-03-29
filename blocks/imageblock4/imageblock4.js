import Link from "next/link";
import Headings from "../../components/homepage/heading/headings";
import Collection4 from "../../components/homepage/imagea_04/images_04";

import { images } from "../../data/users2";
function ImageBlock4(props) {
  var imagecont = props?.uiLayout?.elements;
    return (
     
       <div>
         
     
 <Headings head={imagecont} />

<Collection4  set={imagecont}/>
  
   
  
  </div>
   
  
    )}
    export default ImageBlock4;
  