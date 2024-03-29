import { useState } from "react";
import AlsoLike from "../../components/my-cart/also like-prducts/also_likep";
import CouponCart from "../../components/my-cart/couponcart/couponcart";
import MyCart from "../../components/my-cart/my-cart";

import styles from "./cartblock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import ContinueShopping from "../../components/continueshopping/continueshopping";



export default function CartWebBlock(props) {
  const { userSettings } = props;
  const { defaultPaymentMethods, couponEnabled, paymentMethods } = props;
  const [couponData, setCouponData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(defaultPaymentMethods);
  //redux
  let store = useDispatch(); //to send data
  const getCart = useSelector((state) => state.getCartData);
  var noRecordFound = false;
  var cartItems = null;
  if (getCart?.data?.status === 200) {
    cartItems = getCart?.data?.data;
  }
  if (getCart?.data?.data?.items.length === 0) {
    // setNoRecordFound(true);
    noRecordFound = true;
  } else if (getCart?.status === 203) {
    // setNoRecordFound(true);
    noRecordFound = true;
  }

  return (
    <>


      <div className={styles.paading}>

        <div className="container">
          <h3 className="text-center mt-4">CART</h3>
          {!noRecordFound ? (
            <>
              {/* <div className="row"> */}
                <MyCart />


                
            {/* <CouponCart
                  checkOutId={cartItems?.checkOutId}
                  // appliedCoupon={appliedCoupon}
                  couponData={couponData}
                  setCouponData={setCouponData}
                   selectedPayment={selectedPayment}
                  setIsLoading={setIsLoading} />  */}


                {isLoading && (
                  <>
                    <div className="d-flex justify-content-center">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </>
                )}



              {/* </div> */}
           
       

        {/* <RelatedProducts/> */}
       
        {/* <AlsoLike /> */}  
        </>
        ) : (
        <>
          <div className="text-center">
            <img src={userSettings?.elements?.emptyCart?.image?.value} width="150" alt="" />

            <p className="mt-3">Your cart is Empty</p>
            <div className="my-4">

            <ContinueShopping />
              {/* <Link href="/shop" legacyBehavior>
                <a className={styles.cartPageBtn}>Continue Shopping</a>
              </Link> */}
            </div>
          </div>
        </>
            )}
      </div>
      </div>
    </>

  )
}
