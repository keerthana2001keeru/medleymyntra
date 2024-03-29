import Account from "../../components/myaccount/account";
import AccountSection from "../../components/myaccount/accountsection/accountsection";
import EditProfile from "../../components/myaccount/editprofile/editprofile";






export default function EditProfilewebblock(props) {                          
    return (
       <>
       <Account />
         <div className="row">
         <div className="col-lg-2">
       <AccountSection/>
       </div>
       <div className="col-lg-10">
      <EditProfile />
      </div>
      </div>
      </>
      )}