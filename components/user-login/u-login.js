import Link from "next/link";
import styles from "./user-login.module.scss";
import PhoneInput from "react-phone-input-2";
import React, { useEffect, useRef, useState } from 'react'
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { UserService } from "sk-customer-client-sdk";
import { emailValidation, phoneValidation } from "../../regex/validation";
import { AccountService } from "sk-customer-client-sdk";
import { getCartStore, getWishListStore } from "../../redux/action/productAction";
import { getHttpService } from "../../services/http-service-helper";
function ULogin(props) {
  
   

  return (
    <>
  
      <div className={styles.we}>
        <div className={styles.wh}></div>
        <div className="container">
          <div id={styles["mainContent"]}>

            <div id={styles["reactPageContent"]}>
              <div className={styles["verificationContainer"]}>
                <picture className={styles["img-responsive"]} />

                <img className={styles.immage} src="/img/login-image.jpg" />

                <div className={styles["signInContainer"]}>
                  <div className={styles["welcome-header"]}>Login <span className={styles["welcome-header-small"]}>or</span> Signup</div>
                  <div className={styles["mobileInputContainer"]}>
                    <div className={styles.formgroup}>
                      <form role="form" className={styles["email-form"]} >
                        <div className="row">
                      
                          
                       
                      <input type="tel" name="tel" placeholder="Mobile number*" maxLength="10" className="form-control" id="number" required  /> 
                        </div>
                        <i></i>


                        <div className={styles["midLinks"]}>By continuing, I agree to the <Link href="/account/termsofuse"> Terms of Use</Link> &amp;
                          <Link href="/privacypolicy"> Privacy Policy</Link>
                        </div>
                        <div className="text-align center">
                          <button type="submit" className={styles["submitBottomOption"]} href="/otp" >CONTINUE </button>
                        </div>
                        <div className={styles["get-help"]}>Have trouble logging in? <span><Link href="/account/signup"> Get help </Link></span>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>

              </div>

            </div>
            {/* </div> */}
            <div className={styles.wh}>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

    </>
  )
}
export default ULogin;
