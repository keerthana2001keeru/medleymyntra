import React from "react";
import Banner from "../../components/banner/banner";
import styles from '../../blocks/slideblock.module.scss';
export default function HomeBanner(pageProps) {
  // var bannerConst = props?.uiLayout?.elements;
  // console.log("tro",bannerConst)

  let bannerConst = {};
  if (pageProps?.uiLayout && pageProps?.uiLayout?.blockId) {
    bannerConst = pageProps?.uiLayout;
  } else {
    bannerConst  = require("./mapping.json");
  }


  // const bannerConst = props?.uiLayout;
  return (
    <div className={styles.paadding} >  
  <div className="py-2 flex-fill desk-container"> 
    <Banner bannerConst={bannerConst?.elements} /> 
    </div>
    </div>
  );
}
