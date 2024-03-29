
import Link from "next/link";
import Headings from "../../components/homepage/heading/headings";
import { slideeimg } from "../../data/users5";
import Slidee from "../../mobilecomponent/slider1/slider1";






function SlideeHeading(props) {
  var slideimg = props?.uiLayout?.elements;
    return (
     
       <div>
         
         <Headings head={slideimg}/>
         {/* <Headings heading="BEST OF MEDLEY EXCLUSIVE BRANDS" /> */}
    <Slidee  set={slideimg}/> 
  
  </div>
   
  
    )}
    export default SlideeHeading;
  