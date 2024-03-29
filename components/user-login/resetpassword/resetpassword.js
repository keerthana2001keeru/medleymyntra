import Link from "next/link";
import styles from "./reset.module.scss";
import React from 'react'
function ResetPassword() {
  return (
<>
<div className={styles.we}> 
  <div className={styles.wh}></div>

<div className="container">
    <div id={styles["mainContent"]}>
        
    {/* <div id={styles.saleTimerContent} className={styles["hide"]}></div> */}
   
    
          
            <div id={styles["reactPageContent"]}>
    <div>
         <div className={styles["signInContainer"]}>
            <div className={styles["welcome-header"]}>Reset <span className={styles["welcome-header-small"]}></span>Password </div>
            <div className={styles["mobileInputContainer"]}>
                {/* <div className={styles["form-group"]}>
                <input autocomplete={styles["new-password"]} id="" type="tel" className={styles["form-control mobileNumberInput"]} placeholder="" maxlength="10" value=""/>
                  <span className={styles["placeholderAlternative mobileNumber"]}>+91<span >|</span>
                <span className={styles["mobileNumberPlacholder"]}>Mobile Number<span>*</span></span> 
    </span>  
    <i className="bar"></i>
    </div> */}
    <h4> Enter your Email or phone number and we'll send a link on your email to reset your password</h4>
<br/>
<form action="" method="post" role="form" className={styles["email-form"]}>
              <div className="row">
                  <input type="text" name="text" placeholder=" Email or Mobile number" className="form-control" id="number" required/>
              </div>
              
           {/* <div className="text-center">
           <button type="submit">continue </button>
           </div>
             &nbsp;&nbsp;&nbsp; <h6 className={styles.er}> </h6> */}
            </form>
{/* 
    <div className={styles["midLinks"]}>  
   
    </div> */}
    {/* <div className="text-align center"> */}
  <Link href="/" > 
    <button width="100%" letterSpacing="1px" fontSize="body2" fontWeight="bold" role="button" className={styles["css-wcrh92"]}>
            <div className={styles["css-xjhrni"]}>Send Link</div>
            </button> 
            </Link> 
            <br/>



    {/* </div> */}
    <div className={styles["get-help"]}>unable to reset password? <span>  Get help</span>
    </div>
    </div> 
    </div>
    </div>
    </div>
                
 

    <div className={styles.wh}>
             </div>  

    
        </div>  
        </div>
        </div>
   </>
  )}
  export default ResetPassword;