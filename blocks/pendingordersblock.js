import Account from "../components/myaccount/account";
import AccountSection from "../components/myaccount/accountsection/accountsection";
import MyPendingOrders from "../components/pendingOrders/pendingorders";











export default function PendingOrdersWebblock(props) {  
  const { userSettings } = props;                
    return (
      <>
       <Account/>
      <div className="row">
      <div className="col-lg-2">
    <AccountSection />
      </div>

      <div className="col-lg-8 col-md-12 ">
      <MyPendingOrders  userSettings={userSettings}/>
     
      </div>
      </div>
      
</>
      )}