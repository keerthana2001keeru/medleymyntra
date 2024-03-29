import Link from "next/link";
import styles from "./otp.module.scss";


import React, { useEffect, useState } from 'react'

// import React, { Component, useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AccountService, UserService } from "sk-customer-client-sdk";
import { toast } from "react-hot-toast";
import { getCartStore, getWishListStore } from "../../../redux/action/productAction";
import { getProfile } from "../../../redux/action/profileAction";



function Otp(props) {
  const { userSettings } = props; 
  //console.log("otp",userSettings)
  //const userSettings = props?.uiSettings;

  const router = useRouter();

  // debugger

  const identityType = router?.query?.identityType;
  const inputValue = router?.query?.inputValue;

  const [otp, setOtp] = useState();
  const [loading, setLoading] = useState(false);
  let dispatch = useDispatch();

  const [counter, setCounter] = useState(60);

  var profileDetails = useSelector((state) => state.getProfileData);

  //resend otp counter
  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => setCounter((prevState) => prevState - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  function resendOtp() {

    AccountService.validateUsernameAndGenerateOTP(inputValue, identityType);
    setCounter(60);
  }

  // function verifyHandler(e) {
  //   // e.preventDefault();
  //   setLoading(true);
  //   AccountService.validateUserWithOTP(inputValue, otp, identityType).then(
  //     (response) => {
  //       if (response.status === 203) {
  //         toast.error(response?.data?.message);
  //         setLoading(false);
  //       } else if (response.status === 200) {
  //         UserService.setToken(response?.data?.data?.token);
  //         //getCart
  //         setTimeout(() => {
  //           dispatch(getCartStore());
  //         }, 1000);

  //         setTimeout(() => {
  //           dispatch(getWishListStore());
  //         }, 1000);

  //         setTimeout(() => {
  //           dispatch(getProfile());
  //         }, 1000);
  //       }
  //     }
  //   );
  // }
  useEffect(() => {
    if (otp?.length == 4) {
      setLoading(true);
      AccountService.validateUserWithOTP(inputValue, otp, identityType).then(
        (response) => {
          if (response.status === 203) {
            toast.error(response?.data?.message);
            setLoading(false);
          } else if (response.status === 200) {
            UserService.setToken(response?.data?.data?.token);
            //getCart
            setTimeout(() => {
              dispatch(getCartStore());
            }, 1000);

            setTimeout(() => {
              dispatch(getWishListStore());
            }, 1000);

            setTimeout(() => {
              dispatch(getProfile());
            }, 1000);
          }
        }
      );
    }



  }, [otp])


  useEffect(() => {
    if (profileDetails?.isFetching == false) {
      toast.success(
        "Welcome " + profileDetails?.data?.data?.profile?.firstName
      );
      let url = localStorage.getItem('prevUrl');
      if (url) {
        router.push(url)
      }
      else {
        router.push('/')
      }
    }
  }, [profileDetails?.isFetching]);

  // const favIcon = props?.uiSettings?.ECTH001C05?.blocks?.ECTH001B43?.elements?.favIcon?.image?.value;
  // const title = props?.uiSettings?.ECTH001C05?.blocks?.ECTH001B44?.elements?.webTitle?.title?.value;

  return (
    <>


      {/* <form onSubmit={verifyHandler} className="px-4 pt-4">
        <small>Enter Otp</small>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          // inputStyle={"py-2 mx-auto mb-2 justify-content-start"}
          renderSeparator={<span>-</span>}
          separator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />

{/* <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    /> */}


      {/* <small>
          {counter !== 0 && <div>Resend Otp in {counter}s</div>}
          {counter === 0 && (
            <button onClick={resendOtp} className={styles.resendOtpBtn}>
              Resend Otp
            </button>
          )}
        </small>

        <button className={"mt-3 px-5 rounded-0 " + styles.button}>
          Login

        </button>
      </form> */}


      <div className={styles.we}>
        <div className={styles.wh}></div>
        <div className="container">
          <div id={styles["mainContent"]}>
            {/* <div id={styles.saleTimerContent} className={styles["hide"]}></div> */}



            <div id={styles["reactPageContent"]}>
              <div>
                <div className={styles["verificationContainer"]}>

                  <div>
                    <div className={styles["otpTopImage"]}>
                      <div className={styles["ima"]}>
                        <div className={styles["imma"]}>
                          <img src={userSettings?.elements?.OTPImage?.image?.value} style={{ height: 60, width: 80 }} />
                          {/* </div><div className={`${styles["FreeShippingBanner-header"]} ${styles["FreeShippingBanner-header-primary"]}`}> */}
                        </div>
                      </div>
                    </div>


                    <div className={styles["mobContainer"]}>
                      <h3>Verify with OTP</h3>
                      <h4>Sent to  {router?.query?.inputValue}
                      </h4>

                      <small>Enter Otp</small>
                      <br /><br />
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        // onChange={verifyHandler2}

                        numInputs={4}
                        inputStyle={"w-75 form-control py-2 mx-auto mb-4"}
                    //renderSeparator={<span>- </span>}
                       separator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                      />




                      <div>
                        <small>
                          {counter !== 0 && <div>Resend Otp in {counter}s</div>}
                          {counter === 0 && (
                            <button onClick={resendOtp} className={styles["resendContainer"]}>RESEND OTP</button>

                          )}
                        </small>
                      </div>
                      {loading && (
                    <>
                 <div className="d-flex justify-content-center">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      </div>
                      </>
                  )}
                      {/* loader */}


                      {/* 
                        <button className={"mt-3 px-5 rounded-0 " + styles.button}>
                          Login
                         
                        </button> */}

                    </div>
                    <div className={styles["bottomeLink"]}> Log in using <span>
                      <Link href="/account/ltoacco"> Password </Link></span>
                    </div>
                    <div className={styles["bottomeLink"]}> Having trouble logging in? <span> Get help </span>
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
















  )
}
export default Otp;