import Account from "../../components/myaccount/account";
import AccountSection from "../../components/myaccount/accountsection/accountsection";
import MyCoupon from "../../components/mycoupon/mycoupon";


export default function CouponsWebblock(props) {        
  const { userSettings } = props;   
 // console.log(userSettings)      
    return (
        <>
      <Account/>
      <div className="row">
      <div className="col-lg-2">
    <AccountSection/>
      </div>

      <div className="col-lg-8 col-md-12">
      <MyCoupon noImage={userSettings}
      // offamount="500" purchaseamount="1000" couponcode="wer213" expirydate="11/2/2023"
      />
      {/* <MyCoupon offamount="500" purchaseamount="1000" couponcode="wer213" expirydate="11/2/2023"/>
      <MyCoupon offamount="500" purchaseamount="1000" couponcode="wer213" expirydate="11/2/2023"/>
      <MyCoupon offamount="500" purchaseamount="1000" couponcode="wer213" expirydate="11/2/2023"/>
      <MyCoupon offamount="500" purchaseamount="1000" couponcode="wer213" expirydate="11/2/2023"/> */}
      </div>
      </div>
      </>
      )}