import Form from "../../components/form";
import Account from "../../components/myaccount/account";
import AccountSection from "../../components/myaccount/accountsection/accountsection";
import MyOrders from "../../components/myorders/myorders";








export default function OrdersWebblock(props) {  
  const { userSettings } = props;                
    return (
      <>
       <Account/>
      <div className="row">
      <div className="col-lg-2">
    <AccountSection />
      </div>

      <div className="col-lg-8 col-md-12 ">
      <MyOrders  userSettings={userSettings}/>
     
      </div>
      </div>
      
</>
      )}