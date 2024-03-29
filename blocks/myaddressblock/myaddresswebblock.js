import { useDispatch, useSelector } from "react-redux";
import AddressPage from "../../components/addresspage/address";
import SelectAddress from "../../components/addresspage/selectaddresspage/selectadddress";
import DefaultAddress from "../../components/defaultaddress/defaultaddress";
import Modal from "../../components/my-cart/modal/p modal";
import Account from "../../components/myaccount/account";
import AccountSection from "../../components/myaccount/accountsection/accountsection";
import { getPaymentMethods, reviewCart } from "../../pages/api/redux/action/productAction";
import styles from './myaddressblock.module.scss';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CheckoutService, UserService } from "sk-customer-client-sdk";





export default function MyAddresswebBlock (props){
    const userSettings = props?.uiSettings;
    const [selectedAddress, setSelectedAddress] = useState(null);
    const router = useRouter();
    const dispatch = useDispatch();
    var cartItems = null;
    var noRecordFound = false;
    var isLoading = true;
  
    const reviewCartData = useSelector((state) => state.getReviewCartData);
    if (reviewCartData?.data?.status === 200) {
      cartItems = reviewCartData?.data?.data;
      isLoading = false;
    } else if (reviewCartData?.data?.status === 203) {
      noRecordFound = true;
    } else if (reviewCartData?.data?.status === 202) {
    }
  
    useEffect(() => {
      if(noRecordFound){
        router.push("/shop")
      }
      
    },[noRecordFound])
  
  
    var paymentMethods = null;
    const paymentMethodsData = useSelector((state) => state?.getPaymentMethodsData);
    if (paymentMethodsData?.data?.status === 200) {
      paymentMethods = paymentMethodsData?.data?.data;
    }
  
    var couponEnabled = false;
    var defaultPaymentMethods;
  
    paymentMethods?.filter((element) => {
      if (element.default == 1) {
        defaultPaymentMethods = element.type;
        if (element.couponEnabled == 1) {
          couponEnabled = true;
          return;
        } else {
          couponEnabled = false;
          return;
        }
      }
    });
  
    //payment methods
    useEffect(() => {
      if (!UserService.isAuthenticated()) {
        router.push("/account/login");
      } else {
        dispatch(getPaymentMethods());
      }
    }, []);
    
    useEffect(() => {
      dispatch(reviewCart({ couponData: null, paymentMethods: defaultPaymentMethods }));
    }, [defaultPaymentMethods]);
  
    //  address api
    useEffect(() => {
      if (cartItems && selectedAddress) {
        CheckoutService.confirmBillingAddress(selectedAddress.address, cartItems?.checkOutId);
        CheckoutService.confirmShippingAddress(selectedAddress.address, cartItems?.checkOutId);
      }
    }, [cartItems, selectedAddress]);
  
   // const favIcon =props?.uiSettings?.ECTH001C05?.blocks?.ECTH001B43?.elements?.favIcon?.image?.value;
    return (
        <>
        <Account />
        <div className="row">
        <div className="col-lg-2">
        <AccountSection/>
        </div>
  
       <div className={styles.paadding + " col-lg-8 container"}>
     
       
         
       
       
        <SelectAddress 
           setSelectedAddress={setSelectedAddress}
           selectedAddress={selectedAddress}/>
 
        </div>
      </div>
    
        </>
)}