import Link from "next/link";
import AddressPage from "../../components/addresspage/address";
import PriceDetail2 from "../../components/my-cart/pricedetails/pricedetails2";
import styles from './addressblock.module.scss';






export default function AddressBlock (){

    return (
        <>
<div className={styles.we }> 
  <div className={styles.wh}></div>  
    <div className="container">
    <div className="row">
       
{/* <div className={styles["addressDesktop-base-addressLayout"]}> */}
<div className="col-lg-7 md-6">

<AddressPage/>

</div>


<div className="col-md-4"> 
                       
                                  
<div className={styles["addressDesktop-base-right"]}>
<PriceDetail2 
   
   mrp="3,599"
   discount="2,628"
   total="981" 
/>
        </div>
     
   
       </div>
        </div>
        </div>
        </div>





</>
)}