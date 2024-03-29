import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import styles from "./offcanvas.module.scss"
import { } from "react-icons/ai";
import {BsHandbag} from "react-icons/bs";
import {BiSearch } from "react-icons/bi";
import { GiHamburgerMenu} from "react-icons/gi";
import React from 'react'

function Offcanva() {

  return (
    
  <>
<div className={styles.offcanvas}>
<a className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3 " data-bs-toggle="offcanvas"  data-bs-target="#offcanvasWithBackdrop"  aria-controls="offcanvasWithBackdrop" href="#offcanvasExample" role="button" >
 <i>
 <GiHamburgerMenu /> 
 </i> <b>Medley</b>
</a>

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
<div className="offcanvas-header">
<h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas </h5>
<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div className="offcanvas-body">
<p>.....</p> 
<hr/>

<div className={styles.acc +"dropdown mt-3"}>
<div className={styles["accordion-list"] +" accordion"} id="accordionPanelsStayOpenExample">
 <div className="accordion-item">
   <h2 className="accordion-header" id="panelsStayOpen-headingOne">
     <button className={styles.btn +" accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
     <a className={styles.collapsed}> Men</a>
     </button>
   </h2>
   <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
<div className="accordion-body">  
  

<div className="accordion" id="accordionPanelsStayOpenExample">
 <div className={styles["accordion-list"] +" accordion-item"}>
   <h2 className="accordion-header" id="panelsStayOpen-headingOne">
     <button className={styles.btn +" accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
     <a className={styles.collapsed}>Topwear</a> 
     </button>
   </h2>
   <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
     <div className="accordion-body">
     <ul><li>T-Shirts</li>
       <li>Casual shirts</li>
       <li>Formal shirts</li>
       <li>Jackets</li>
   </ul> 
     </div>
   </div>
 </div>
 <div className={styles["accordion-list"] +" accordion-item"}>
   <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
     <button className={styles.btn +" accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
     <a className={styles.collapsed}> Bottomwear </a>
     </button>
   </h2>
   <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
     <div className="accordion-body">
     <ul><li>Jeans</li>
       <li>Casual trousers</li>
       <li>Formal trousers</li>
       <li>Shorts</li>
   </ul> 
     </div>
   </div>
 </div>
 <div className="accordion-item">
   <h2 className="accordion-header" id="panelsStayOpen-headingThree">
     <button className={styles.btn +" accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
     <a className={styles.collapsed}>  Footwear </a>
     </button>
   </h2>
   <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
     <div className="accordion-body">
     <ul><li>Casual shoes</li>
       <li>Sports shoes</li>
       <li>Formal shoes</li>
       <li>Socks</li>
   </ul> 
     </div>
   </div>
 </div>
</div>
</div> 
   </div>
   
 </div>
 <div className="accordion-item">
   <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
     <button className={styles.btn +" accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
     <a className={styles.collapsed}>  Women </a>
     </button>
   </h2>
   <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
     <div className="accordion-body">
     <div className="accordion" id="accordionPanelsStayOpenExample">
 <div className="accordion-item">
   <h2 className="accordion-header" id="panelsStayOpen-headingOne">
     <button className={styles.btn +" accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
     <a className={styles.collapsed}>Topwear</a>
     </button>
   </h2>
   <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
     <div className="accordion-body">
     <ul><li>T-Shirts</li>
       <li>Casual shirts</li>
       <li>Formal shirts</li>
       <li>Jackets</li>
   </ul> 
     </div>
   </div>
 </div>
 <div className="accordion-item">
   <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
     <button className={styles.btn +" accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
     <a className={styles.collapsed}>Bottomwear</a>
     </button>
   </h2>
   <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
     <div className="accordion-body">
     <ul><li>Jeans</li>
       <li>Casual trousers</li>
       <li>Formal trousers</li>
       <li>Shorts</li>
   </ul> 
     </div>
   </div>
 </div>
 <div className="accordion-item">
   <h2 className="accordion-header" id="panelsStayOpen-headingThree">
     <button className={styles.btn +" accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
     <a className={styles.collapsed}> Footwear </a>
     </button>
   </h2>
   <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
     <div className="accordion-body">
     <ul><li>Casual shoes</li>
       <li>Sports shoes</li>
       <li>Formal shoes</li>
       <li>Socks</li>
   </ul> 
     </div>
   </div>
 </div>
</div>
     </div>
   </div>
 </div>
 <div className={styles["accordion-list"] +" accordion-item"}>
   <h2 className="accordion-header" id="panelsStayOpen-headingThree">
     <button className={styles.btn +" accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
     <a className={styles.collapsed}>  Kids </a>
     </button>
   </h2>
   <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
     <div className="accordion-body">
     <div className={styles["accordion-list"] +" accordion"} id="accordionPanelsStayOpenExample">
 <div className="accordion-item">
   <h2 className="accordion-header" id="panelsStayOpen-headingOne">
     <button className={styles.btn +" accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
     <a className={styles.collapsed}> Topwear</a>
     </button>
   </h2>
   <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
     <div className="accordion-body">
     <ul><li>T-Shirts</li>
       <li>Casual shirts</li>
       <li>Formal shirts</li>
       <li>Jackets</li>
   </ul> 
     </div>
   </div>
 </div>
 <div className={styles["accordion-list"] +" accordion-item"}>
   <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
     <button className={styles.btn +" accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
     <a className={styles.collapsed}>  Bottomwear </a>
     </button>
   </h2>
   <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
     <div className="accordion-body">
     <ul><li>Jeans</li>
       <li>Casual trousers</li>
       <li>Formal trousers</li>
       <li>Shorts</li>
   </ul> 
     </div>
   </div>
 </div>
 <div className={styles["accordion-list"] +" accordion-item"}>
   <h2 className="accordion-header" id="panelsStayOpen-headingThree">
     <button className={styles.btn +" accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
     <a className={styles.collapsed}>   Footwear </a>
     </button>
   </h2>
   <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
     <div className="accordion-body">
     <ul><li>Casual shoes</li>
       <li>Sports shoes</li>
       <li>Formal shoes</li>
       <li>Socks</li>
   </ul> 
     </div>
   </div>
 </div>
</div>
     </div>
   </div>
 </div>


<div className={styles["accordion-list"] +" accordion-item"}>
   <h2 className="accordion-header" id="panelsStayOpen-headingThree">
     <button className={styles.btn +" accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
     <a className={styles.collapsed}>  Home &amp;Living</a>
     </button>
   </h2>
   <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
     <div className="accordion-body">
  
     </div>
   </div>
 </div>



<div className={styles["accordion-list"] +" accordion-item"}>
   <h2 className="accordion-header" id="panelsStayOpen-headingThree">
     <button className={styles.btn +" accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
     <a className={styles.collapsed}>Beauty</a>
     </button>
   </h2>
   <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
     <div className="accordion-body">
 
     </div>
   </div>
 </div>
</div>
<hr/>
<a className="position-relative nav-link" href=""><h6>Account</h6></a>
<a className="position-relative nav-link" href=""><h6>Orders</h6></a>
<a className="position-relative nav-link" href=""><h6>Gift Cards</h6></a>
<a className="position-relative nav-link" href=""><h6>Contact us</h6></a>


<img src="/img/cardimg.jpg"  alt="..." className="img-fluid"/>


   
   </div>
 </div>
</div> 
                  
</div>                  
  </>                  
                               
  )}
                                 
                               export default Offcanva;





           