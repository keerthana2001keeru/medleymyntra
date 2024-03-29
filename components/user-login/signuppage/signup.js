import Link from "next/link";
import styles from "./signup.module.scss";
import React, { useEffect } from 'react'
import { useState, useRef } from "react";
import OtpInput from "react-otp-input";
import { AccountService, UserService } from "sk-customer-client-sdk";
//redux
import { useDispatch, useSelector } from "react-redux";
// import { getProfile } from "../api/redux/action/profileAction";
//notification
import toast from "react-hot-toast";

import { getHttpService } from '../../../services/http-service-helper';
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { getProfile } from "../../../redux/action/profileAction";

function SignUp(props) {
    const router = useRouter();
    const identityType = router?.query?.identityType;
    const inputValue = router?.query?.inputValue;

    const [showPassword, setShowPassword] = useState("password");

    const [otp, setOtp] = useState();

    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const referralRef = useRef(null);

    const [referer, setReferer] = useState(null)
    const [loading, setLoading] = useState(false);
    const [counter, setCounter] = useState(60);
    //redux
    let dispatch = useDispatch();
    var profileDetails = useSelector((state) => state.getProfileData);

    //counter for resend otp

    useEffect(() => {
        if (UserService.isAuthenticated()) {
            Router.push('/account/profile')
        }
        else {
            let referer = localStorage?.getItem('referer')
            if (referer) {
                setReferer(referer)
            }
        }
    }, [])

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    function resendOtp() {
        AccountService.validateUsernameAndGenerateOTP(inputValue, identityType);
        setCounter(60);
    }

    const [nameValidation, setNameValidtion] = useState("");
    const [otpValidation, setOtpValidation] = useState("")

    //call api for sign up
    function verifyHandler(e) {
        e.preventDefault();
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        const referalCode = referralRef?.current?.value;

        const patternSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/g;


        if (name.match(patternSpecial)) {
            setNameValidtion("Name cannot contain special characters");
            return
        }
        else if (name.match(/\d/g)) {
            setNameValidtion("Name cannot contain numbers")
            return;
        }
        else if (!otp || otp.length != 4 || !otp.match(/\d/g)) {
            setOtpValidation("Enter Valid Otp");

        }
        else {
            setNameValidtion("")
            setOtpValidation("")
            setLoading(true);
            AccountService.createAccount(
                name,
                identityType === "PHONE" ? inputValue : "",
                identityType === "EMAIL" ? inputValue : "",
                password,
                identityType,
                otp,
                referalCode
            ).then((response) => {
                if (response.status === 200) {
                    //call redux to update cart and login
                    UserService.setToken(response.data.data.token);
                    let referer = localStorage.getItem('referer');
                    if (referer) {
                        localStorage.removeItem('referer')
                    }
                    //call getProfile

                    setTimeout(() => {
                        dispatch(getProfile());
                    }, 3000);
                    setTimeout(() => {
                        toast.success("Welcome " + name)
                        Router.push("/")
                    }, 1000);
                    setLoading(false);
                }
                if (response.status === 203) {
                    toast.error(response.data.message);
                    setLoading(false);
                }
            });
        }
    }

    //function to show and hide password
    function passwordHandler() {
        if (showPassword === "text") {
            setShowPassword("password");
        } else {
            setShowPassword("text");
        }
    }
    const userSettings = props?.uiSettings;
    // const favIcon = props?.uiSettings?.ECTH001C05?.blocks?.ECTH001B43?.elements?.favIcon?.image?.value;
    // const title = props?.uiSettings?.ECTH001C05?.blocks?.ECTH001B44?.elements?.webTitle?.title?.value;

    return (
        <>
            <div className={styles.we}>
                <div className={styles.wh}>

                </div>
                <div className="container">

                    <div id={styles["mainContent"]}>
                        {/* <div id="saleTimerContent" className="hide">
</div> */}
                        <div id={styles["MyntraReactContent"]}>

                            <div id={styles["mainReactContent"]}>
                                <div id={styles["reactPageContent"]}>
                                    <div>
                                        <div className={styles["formContainer"]}>
                                            <div className={styles["signUpHeader"]}>Complete your sign up</div>
                                            <div className={styles["phoneNumber"]}>

                                                {/* <div className={styles["phoneNumberLabel"]}>Mobile Number</div> */}
                                                {/* <div className={styles["phoneNumberValue"]}>{inputValue}</div>  */}

                                                <div className={styles["mobContainer"]}>
                                                    <h6>Verify with OTP</h6>
                                                    <h4>Sent to  {router?.query?.inputValue}
                                                    </h4>

                                                    <small>Enter Otp</small>
                                                    <br /><br />
                                                    <form onSubmit={verifyHandler}>
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

                                                    <label htmlFor="name" className="mt-3">
                                                        Name<span className="text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Name"
                                                        className="form-control rounded-0"
                                                        ref={nameRef}
                                                        id="name"
                                                        required
                                                    />
                                                    <small className="text-danger mb-3">{nameValidation}</small>
                                                    <div className="py-2"></div>

                                                    <label htmlFor="password">Password</label>
                                                    <div className="input-group mb-3">
                                                        <input
                                                            type={showPassword}
                                                            className="form-control rounded-0"
                                                            placeholder="Password"
                                                            aria-label="Password"
                                                            aria-describedby="password"
                                                            ref={passwordRef}
                                                            required
                                                        />
                                                        <span
                                                            className="input-group-text rounded-0"
                                                            id="password"
                                                            onClick={passwordHandler}
                                                            style={{ cursor: "pointer" }}
                                                        >
                                                            {showPassword === "text" ? (
                                                                <BsFillEyeSlashFill />
                                                            ) : (
                                                                <BsFillEyeFill />
                                                            )}
                                                        </span>
                                                    </div>

                                                    <input
                                                        type="text"
                                                        placeholder="Referral Code"
                                                        id="code"
                                                        defaultValue={referer}
                                                        ref={referralRef}
                                                        className="form-control rounded-0 mb-3"
                                                    />

                                                    <button className={styles["submitButton"]} id="">
                                                        CREATE ACCOUNT
                                                    </button>
                                                </form>
                                    
                                                </div>

                                            </div>



                                            {/* <input type="" name="tel" placeholder="Mobile number" maxlength="10"  className="form-control" id="number" required/>
</div> */}
                                            {/* <form  className={styles["signUpForm"]}>
<div>
    <div className={styles["form-group "]}>
<input  id="" type="password" className="form-control" placeholder="Create password" />
    <span className={styles["placeholderAlternative"]}><span ></span>
     </span>
   
        <div className={styles["passwordWidgets"]}>
           

</div>
</div>
<div className={styles["form-group"]}>
<input id="" type="text" className="form-control" placeholder="FullName" />
<span className={styles["placeholderAlternative"]}>  </span>

    </div>
    <div className={styles["form-group "]}>
<input  id="" type="text" className="form-control" placeholder="Email" />
<span className={styles["placeholderAlternative"]}> </span>

    </div>
&nbsp;

<div className={styles["form-group"]}>
<div className="btn-group btn-group-justified">
<div className={styles["buttonGroupInfo"]}>Select Gender:</div>  
<div className={styles["rbContainer"]}>
 &nbsp;&nbsp; 
 <input type="radio" value="F" name="gender" className={styles["buttonValue"]}/> Female &nbsp;&nbsp;
<input className={styles["buttonValue"]}type="radio" value="M" name="gender" /> Male
  
    </div>
   


</div>
</div>



<div className={styles["form-group "]}>
<input  id="" type="tel" className="form-control mobileNumberInput" placeholder="Alternate Mobile Number" maxlength="10" />
<span className={`${styles["placeholderAlternative"]} ${styles["mobileNumber"]}`}>
<span className={styles["mobileNumberPlacholder"]}></span>
 </span>
 <i className="bar">
    </i>
    </div>
 <div className={styles["textInputInfo"]}></div>
 <div className={styles["form-group"]}>
 <input autocomplete="new-password" id="" type="text" className="form-control" placeholder="Hint name (Alternate number)"/>
 <span className={styles["placeholderAlternative"]}></span>
 <i className="bar">

 </i>
 </div>
 <div className={styles["textInputInfo"]}>This name will be a hint for your alternate number</div>
 <div className={styles["form-group"]}>

 <button className={styles["submitButton"]} id="">CREATE ACCOUNT</button>
 </div>
 </div>
 </form> */}
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className={styles.wh}>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SignUp;