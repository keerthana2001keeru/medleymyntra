import AlsoLike from "../../components/my-cart/also like-prducts/also_likep";
import CouponCart from "../../components/my-cart/couponcart/couponcart";
import MyCart from "../../components/my-cart/my-cart";
import styles from "./cartblock.module.scss";







export default function CartMobBlock() {
    return (
      <>     
      


 <div className="container"> 
 <div className="row"> 

     
       <MyCart/>
        <div className={styles.paadding}> 
       <CouponCart />
      </div> 
       </div>
       </div>
       {/* <RelatedProducts/> */}
       <AlsoLike />
   
   
  
      
      
      
      </>

    )}
 