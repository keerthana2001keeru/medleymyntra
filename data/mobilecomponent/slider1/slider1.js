import Link from "next/link";

import styles from "./sliderr.module.scss";
import {images} from '../../data/users5';


import React, { Component } from "react";
import Slider from "react-slick";


  
function Slidee(props) {
    const set=props?.set
    const settings = {
       
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4
      };
  return (
    
<div className={styles.rtg}>
        {/* <div className="container"> */}
            {/* <div className="row text-left p-2 pb-3"> */}
                 {/* <h2>Related Products</h2>  */}
                 {/* </div> */}
           
        <h2>  </h2>
        <Slider {...settings}>
      
            {set?.productImages?.value?.map((image,index)=>(
                    <div className="col-md-4" key={index} >
                        <div className={styles["product-wap"] + " card mb-4 product-wap rounded-0"}>
                        <Link href="/shop"> 
                            <div className={styles["card"] +" card rounded-0"}>
                              <img src={image?.productImage?.value} className="card-img rounded-0 img-fluid" alt=""  />
                                {/* <div className={styles["product-overlay"] + " card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"}>
                                    
                                </div> */}
                            </div>
                            </Link>
                        </div>
                    </div>
                    ))}  
          
        
          </Slider>
    
    

    
          </div>
  )}
    export default Slidee;



