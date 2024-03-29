
//homeblock
import React from "react";
import GetInspiredBlock from "./getinspiredblock";
import ImageBlock2 from "./imageblock2/imageblock2";
import ImageBlock4 from "./imageblock4/imageblock4";
import ImageBlock5 from "./imageblock5/imageblock5";
import ImageBlock8 from "./imageblock8/imageblock8";
import LivingSection from "./livingblock/livingblock";
import NavbarBlock from "./navbarblock/navbarblock";
import SidecardBlock from "./sidecardblock";
import SlideBlock from "./slideblock";
import SlideeHeading from "./slideeheading/slideeheading";
import Sliderbanner2Block from "./sliderbanner2block";
import HomeBa from "./banner/banner";
import HeroBannerBlock from "./HerobannerBlock/herobannerblock";
import HomeBanner from "./banner/banner";












const ComponentItems = {

  //home
  "MT00030B01": SlideBlock,
  "MT00030B150":HomeBanner,
  "MT00030B151":HeroBannerBlock,
 "MT00030B02": ImageBlock8,
  "MT00030B03": ImageBlock8,
  "MT00030B04": SlideeHeading,
  "MT00030B05":ImageBlock8,
   "MT00030B06": ImageBlock8,
  
 "MT00030B07": SlideeHeading,
 "MT00030B08": ImageBlock8,
  "MT00030B09": ImageBlock8,
 "MT00030B010": ImageBlock8,

//page1 men
"MT00030B011": SlideBlock,
"MT00030B012": ImageBlock4,
"MT00030B013": SlideeHeading,
"MT00030B014": ImageBlock4,
"MT00030B015": ImageBlock5,
"MT00030B016": ImageBlock5,
"MT00030B017": ImageBlock4,
"MT00030B018": ImageBlock4,


//page2 women
"MT00030B021": SlideBlock,
"MT00030B022": ImageBlock5,
"MT00030B023": ImageBlock5,
"MT00030B024": ImageBlock5,
"MT00030B025": SlideeHeading,
"MT00030B026": ImageBlock5,
"MT00030B027": ImageBlock5,
"MT00030B028": ImageBlock5,
 

//page3  kids
 "MT00030B031": SlideBlock,
 "MT00030B032": ImageBlock4,
 "MT00030B033": ImageBlock2,
 "MT00030B034": ImageBlock5,
 "MT00030B035": ImageBlock2,
 "MT00030B036": ImageBlock4,
 "MT00030B037": ImageBlock2,
 "MT00030B038": ImageBlock5,
 //page4  home and living

 "MT00030B041": SlideBlock,
 "MT00030B042": LivingSection,
  "MT00030B043":  GetInspiredBlock,
 "MT00030B044":  GetInspiredBlock,
//header section -navbar and megamenu


"MT00030C06": NavbarBlock,


 };



















function MapBlock(blockId, data) {
  
  // component does exist
  if (typeof ComponentItems[blockId] !== "undefined") {
     
      return React.createElement(ComponentItems[blockId], {
        key: blockId,
        uiLayout: data,
      });
    }
  }
  
  export { MapBlock };
  