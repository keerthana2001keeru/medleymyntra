import Account from "../../components/myaccount/account";
import AccountSection from "../../components/myaccount/accountsection/accountsection";
import MyReferrals from "../../components/myreferral/myreferral";






export default function ReferralsWebblock(props) {                          
    return (
       <>
       <Account />
         <div className="row">
         <div className="col-lg-2">
       <AccountSection/>
       </div>
       <div className="col-lg-10">
      <MyReferrals />
      </div>
      </div>
      </>
      )}
  