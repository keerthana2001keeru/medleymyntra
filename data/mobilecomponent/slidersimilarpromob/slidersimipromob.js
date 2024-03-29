import Link from "next/link";

import styles from "./slidersimi.module.scss";
import {images} from '../../data/users5';


import React, { Component } from "react";
import Slider from "react-slick";


  
function SimiSlider(props) {
    const image=props?.set
    const settings = {
       
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4
      };
  return (



    
<div >
         <div className="container">
         <div className="row text-left p-2 pb-3"> 
     <h5 className={styles["similar-heading"]}>Related Products</h5>  
             </div> 
           
        <h2>  </h2>
        <Slider {...settings}>
      
            {image?.map((item,index)=>(
                    <div className="col-md-4" key={index} >
                        <div className={styles["product-wap"] + " card mb-4 product-wap rounded-0"}>
                            <div className={styles["card"] +" card rounded-0"}>
                                <img src={item.productImg} className="card-img rounded-0 img-fluid" alt="" />
                             </div>
                             <div className="card-body">
                     <div className={styles["product-item-metaContainer"]}>
                        <p className={styles["product-item-brand"]}>{item.productBrand}</p>
                        <p className={styles["product-item-title"]}>{item.productTitle}</p>
                        <div className={styles["product-item-pricing"]}>
                            <span className={styles["product-item-selling-price"]}>
                         {item.price}
                            </span>
                            <s className={styles["product-item-mrp"]}>{item.MRP}</s>
                     <span className={styles["product-item-discount"]}>({item.OFF})</span>
                     </div>
                     </div>


                     </div>










                        </div>
                    </div>
                    ))}  
          
        
          </Slider>
    
    

    
          </div>
          </div>
  )}
    export default SimiSlider;



