import Account from "../../components/myaccount/account";
import AccountSection from "../../components/myaccount/accountsection/accountsection";
import MyRewardss from "../../components/myrewards/myrewards";










export default function RewardsWebblock() {                          
    return (
       <>
       <Account />
         <div className="row">
         <div className="col-lg-2">
       <AccountSection/>
       </div>
       <div className="col-lg-10 col-md-12">

      <MyRewardss/>
      
      </div>
      </div>
      </>
      )}