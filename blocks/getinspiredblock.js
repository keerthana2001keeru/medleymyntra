import Collection3 from "../components/homepage/imagea_03/images_03";
import Getinspired from "../components/livingpage/getinspired/getinspired";









function GetInspiredBlock(props) {
    
    var imagecontnt = props?.uiLayout?.elements;
    var imagecontnte = props?.uiLayout?.elements;
  
      return (
       
         <div>
             <Getinspired sey={imagecontnte}/>
          <Collection3 set={imagecontnt} /> 
   
  
  
  
           </div>
     
    
     )}
     export default  GetInspiredBlock;
   