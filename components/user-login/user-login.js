import Link from "next/link";
import styles from "./user-login.module.scss";
import { MdCall } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import React, { useEffect, useRef, useState } from 'react'
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { UserService } from "sk-customer-client-sdk";
import { emailValidation, phoneValidation } from "../../regex/validation";
import { AccountService } from "sk-customer-client-sdk";
import { getCartStore, getWishListStore } from "../../redux/action/productAction";
import { getHttpService } from "../../services/http-service-helper";
import { toast } from "react-hot-toast";
function UserLogin(props) {
  const { userSettings } = props;   
  //const userSettings = props?.uiSettings;
  //console.log("w",userSettings)
  var dispatch = useDispatch();
  const [phone, setPhone] = useState(); // to get phone number 10 digit
  const [countryCode, setCountryCode] = useState(); // to get country code
  var inputValue; // to get formatted phone number +91-(phone no.)
  const [email, setEmail] = useState(); //get email input value
  const [inputType, setInputType] = useState(() => false); // To toggle email or phone input field
  const router = useRouter();

  const [phoneError, setPhoneError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  var profileDetails = useSelector((state) => state.getProfileData);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    var isFetching = true;
    if (isFetching) {
      if (UserService.isAuthenticated()) {
        setIsAuthenticated(true);
        Router.push("/account/profile");
      }
    }
    return () => {
      isFetching = false;
    };
  }, []);

  useEffect(() => {
    let referer = router?.query?.referer;
    if (referer) {
      localStorage.setItem("referer", referer);
    }
  }, [router]);

  useEffect(() => {
    if (profileDetails?.isFetching == false) {
      setLoading(false);
      toast.success("Welcome " + profileDetails?.data?.data?.profile?.firstName);

      Router.push("/");
    }
  }, [profileDetails?.isFetching]);



  function loginHandler(e) {
    e.preventDefault();
    const phoneFormatted = `+${countryCode?.dialCode}-${phone}`;

    var phoneVal = phoneValidation(phone, countryCode?.countryCode);

    if (phoneVal) {
      setPhoneError(phoneVal);
    }

    var emailVal = emailValidation(email);
    // debugger
    if (emailVal) {
      setEmailError(emailVal);
    }


    inputValue = inputType ? phoneFormatted : email;
    
    const identityType = inputType ? "PHONE" : "EMAIL";

    if (emailVal == null || phoneVal == null) {
      AccountService.validateUsernameAndGenerateOTP(inputValue, identityType).then((response) => {
        if (response.status === 200) {
          Router.push({
            pathname: "/account/otp",
            query: {
              inputValue: inputValue,
              identityType: identityType,
            },
          });
        } else if (response.status === 202) {
          Router.push({
            pathname: "/account/signup",
            query: {
              inputValue: inputValue,
              identityType: identityType,
            },
          });
        }
      });
    }
  }

  const componentClicked = (data) => { };

  const responseFacebook = (response) => {
    setLoading(true);
    AccountService.socialLogin(
      response?.email,
      "",
      response?.name,
      response?.userID,
      "FACEBOOK",
      response?.accessToken,
      ""
    ).then((response) => {
      if (response.data.status === 200) {
        UserService.setToken(response.data.data.token);
        setTimeout(() => {
          dispatch(getCartStore());
        }, 1000);

        setTimeout(() => {
          dispatch(getWishListStore());
        }, 1000);

        setTimeout(() => {
          dispatch(getProfile());
        }, 1000);
      } else {
        toast.error("Something Went Wrong. Please try again");
        setLoading(false);
      }
    });
  };

 



  return (
    <>
      {!isAuthenticated &&
        <div className={styles.we}>
          <div className={styles.wh}></div>
          <div className="container">
            <div id={styles["mainContent"]}>

              <div id={styles["reactPageContent"]}>
                <div className={styles["verificationContainer"]}>
                  <picture className={styles["img-responsive"]} />

                  <img className={styles.immage}
                  src= {userSettings?.elements?.loginimage?.image?.value}
                    alt =""/>
                  {/* <img src={userSettings?.elements?.login image?.image?.value} width="150" alt="" /> */}
                  <div className={styles["signInContainer"]}>
                    <div className={styles["welcome-header"]}>Login <span className={styles["welcome-header-small"]}>or</span> Signup</div>
                  
                    <div className={styles["mobileInputContainer"]}>
                      <div className={styles.formgroup}>
                        <form role="form" className={styles["email-form"]} onSubmit={loginHandler}>

                          <div className="row">
                            {inputType ? (
                              <>
                                <PhoneInput
                                  country={"in"}
                                  autoFormat={false}
                                  countryCodeEditable={false}
                                  inputProps={{
                                    // name: "phone",
                                    className: "form-control w-100 rounded-0",
                                    required: true,
                                    autoFocus: false,
                                  }}
                                  onChange={(value, data) => {
                                    setPhone(value.slice(data.dialCode.length));
                                    setCountryCode(data);
                                  }}
                                  required={true}
                                />
                                <div className="mt-1">
                                  {/* <small className="text-danger">{phoneError}</small> */}
                                </div>
                              </>
                            ) : (
                              <>
                                <input
                                  type="email"
                                  id="email"
                                  className="form-control w-100 rounded-0 mb-3"
                                  placeholder="Email Address"
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="mt-1">
                                  {/* <small className="text-danger">{emailError}</small> */}
                                </div>
                              </>
                            )}
                            

                            {/* <input type="tel" name="tel" placeholder="Mobile number*" maxLength="10" className="form-control" id="number" required  /> */}
                          </div>
                         
                        
                          <div className={styles["midLinks"]}>By continuing, I agree to the <Link href="/account/termsofuse"> Terms of Use</Link> &amp;
                            <Link href="/privacypolicy"> Privacy Policy</Link>
                          </div>
                         <div className="row">
                          <div className="col-md-1 ">
                          <button
                          className={styles["submitButton"] + " toggleMail"}
                          onClick={() => {
                            setInputType(!inputType);
                          }}
                        > 
                       {inputType ? <MdAlternateEmail /> : <MdCall />}  
                      
                        </button>
                        </div>
                        </div>
                        <div className="text-align-center">
                            <button type="submit" className={styles["submitBottomOption"]} >CONTINUE </button>
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
      }
    </>
  )
}
export default UserLogin;
