import Link from "next/link";
import Headings from "../../components/homepage/heading/headings";
import Collection2 from "../../components/homepage/imagea_02/images_02";
import { images } from "../../data/users2";
import { pictu } from "../../data/users4";
function ImageBlock2(props) {
    var imageconte = props?.uiLayout?.elements;
    return (
    <div className="container-fluid d-none d-lg-block">
    <Headings head={imageconte}/>
    <Collection2  set={imageconte}/>
    </div>
)}
    export default ImageBlock2;
  