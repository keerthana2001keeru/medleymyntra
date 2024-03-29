import Link from "next/link";
import Headings from "../../components/homepage/heading/headings";
import Collection3 from "../../components/homepage/imagea_03/images_03";
import { images } from "../../data/users2";
function ImageBlock3(props) {
  var imageconten = props?.uiLayout?.elements;
  var heading = props?.uiLayout?.elements;
  return (
  <div>
 <Headings head={imageconten} />
 <Collection3  set={imageconten}/>
  </div>
)}
export default ImageBlock3;
  