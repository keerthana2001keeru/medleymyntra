import Link from "next/link";

 import styles from "./sliderr.module.scss";



import React, { Component } from "react";
import Slider from "react-slick";


  
function Banner(props) {
  const image=props?.set
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    
<div className={styles.paadding}>
        {/* <div className="container"> */}
            {/* <div className="row text-left p-2 pb-3"> */}
                 {/* <h2>Related Products</h2>  */}
                 {/* </div> */}
           
        <h2>  </h2>
        <Slider {...settings}>
      
            {image?.map((image,index)=>(
                    <div className="col-md-4" key={index} >
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img src={image.imageName} className="card-img rounded-0 img-fluid" alt="" />
                                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    ))}  
          
        
          </Slider>
    
    

    
    </div>
  )}
    export default Banner;