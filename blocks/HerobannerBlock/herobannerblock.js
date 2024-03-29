import HeroBanner from "../../components/banner3/banner3";

function HeroBannerBlock(props) {
    var set = props?.uiLayout?.elements;
  
      

    return (
     
        <div className="py-5 d-none d-lg-block" >  
          <HeroBanner sete={set} />  
       


         </div>
   
  
   )}
   export default  HeroBannerBlock;