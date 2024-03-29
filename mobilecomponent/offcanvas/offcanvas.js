
import Link from "next/link";
import styles from "./offcanvas.module.scss"
import { BsPersonCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { AccountService, UserService } from "sk-customer-client-sdk";
import { IoIosArrowForward } from "react-icons/io";
import { toast } from "react-hot-toast";

function Offcanvas(props) {
  const headerConfig = props?.headerConfig;
  const dispatch = useDispatch()
  const router = useRouter()
  function removePadding() {
  let element = document.getElementsByTagName("body");
    element[0].style.overflow = "auto";
  }

  function logoutHandler() {
    //debugger
    AccountService.logout().then((response) => {
      if (response.data.status === 200) {
        UserService.removeToken();
        setIsAuthenticated(false);
        setCartCount(0);
        setWishListCount(0);
        store(logOut());
     toast.success("Logout Success");
        setTimeout(() => {
          // window.location.href = "/"
          router.push("/");
        }, 1000);
      }
    });
  }
  const profileDataRedux = useSelector((state) => state.getProfileData);
  var profileData;
  if (profileDataRedux?.data?.status === 200) {
    profileData = profileDataRedux?.data?.data;
  }
 // console.log(profileData)
  return (

    <>
      <div className={styles.offcanvass + " d-lg-none"}>
        <div className="d-lg-none d-flex align-items-center py-4 col-7 col-sm-auto pr-3 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop" href="#offcanvasExample" role="button" style={{ gap: "10px" }} >
          <div className={styles.padding}>
            <GiHamburgerMenu />
          </div>
          <div><b>Medley</b></div>
        </div>

        <div className={styles.offcanva + " offcanvas offcanvas-start"} id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
          <div className={styles.accor + " offcanvas-header"} >

            <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
              <Link href="/account/login">
                <i className={styles.icon}><BsPersonCircle /></i>
              </Link>
              <br/>{profileData?.profile?.firstName}</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className={styles.acco + " offcanvas-body"}>

          <ul className={styles.offCanvasMenus}>
        {headerConfig?.blocks?.MT00030B051?.elements?.megaMenu?.categoriesMenu?.value?.map((item, index) => {
          if (item?.children?.length !== 0) {
            return (
              <li className="text-uppercase" key={index}>
                <div className="d-flex justify-content-between">
                  <div>{item?.name}</div>
                  <div>
                    <button
                      className="bg-transparent border-none text-dark"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#megamenu" + index}
                      aria-expanded="false"
                      aria-controls={index}
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>
                </div>

                <div className="collapse" id={"megamenu"+index}>
                  <ul>
                    {item?.children?.length !== 0 &&
                      item?.children?.map((element, index) => {
                        return (
                          <div key={index}>
                            <div className={styles.textYellow + " p-0 m-0"}>
                              <Link  href={"/shop"+element?.link || "#" } legacyBehavior><a className="text-decoration-none">{element?.name}</a></Link>
                            </div>
                            {element?.children.length !== 0 &&
                              element?.children?.map((el, index) => {
                                return (
                                  <li key={index}>
                                    <Link href={"/shop"+el?.link || "#"} legacyBehavior>{el?.name}</Link>
                                  </li>
                                );
                              })}
                          </div>
                        );
                      })}
                  </ul>
                </div>
              </li>
            );
          } else {
            return (
              <li className="text-uppercase" key={index}>
                <Link href={item?.link || "#"} legacyBehavior>
                  <a className="text-decoration-none text-dark">{item?.name}</a>
                  </Link>
              </li>
            );
          }
        })}
      </ul>
 
            <div className={styles.acco + " dropdown mt-3"}>
            

              <hr />
              <Link className="position-relative nav-link" href="/account/profile"><h6>Account</h6></Link>
              <Link className="position-relative nav-link" href="/account/orders"><h6>Orders</h6></Link>
              <Link className="position-relative nav-link" href="/account/coupons"><h6>Coupons</h6></Link>
              <Link className="position-relative nav-link" href="/account/rewards"><h6>Rewards</h6></Link>
              <Link className="position-relative nav-link" href="/account/referrals"><h6>Referrals</h6></Link>
              <Link className="position-relative nav-link" href="/account/addresses"><h6>Saved Addresses</h6></Link>
              <Link className="position-relative nav-link" href="/account/editprofile"><h6>Edit Profile</h6></Link>
            
                {/* <h6>Logout</h6> */}
               
              <button className="position-relative nav-link btn text-dark" onClick={logoutHandler}>
           
            Logout
          </button>
          
              <img src=  {headerConfig?.blocks?.MT00030B052?.elements?.offcanvasimage?.image?.value} alt="..." className="img-fluid" />








            </div> 
          </div>
        </div>

      </div>
    </>

  )
}

export default Offcanvas;





