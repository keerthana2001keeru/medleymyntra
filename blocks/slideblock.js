import HeroBanner from "../components/banner3/banner3";
import Banner4 from "../components/banner4/banner4";
import Collection8 from "../components/homepage/imagea_08/images_08";
import Sidecard from "../components/homepage/sidecard/sidecard";
import Slide from "../components/homepage/slider/slider";
import SliderBanner2 from "../components/sliderbanner2/sliderbanner2";
import TopbarOffer from "../components/topbaroffer/topbaroffer";
import { CSlider } from "../data/userslider";
import HeroBannerBlock from "./HerobannerBlock/herobannerblock";
import HomeBa from "./banner/banner";
import styles from './slideblock.module.scss';


function SlideBlock(props) {
 
    var bannerConst = props?.uiLayout?.elements;
  
    return (
    <>
      <div className={styles.paadding} >  
  
  <Slide set={bannerConst} />   

     </div> 
       </>
    )}
    export default SlideBlock;
  