import classes from "./header-middle.module.scss";
import { FaUserAlt, FaShoppingCart, FaHeart } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Router from "next/router";
import { useState, useEffect, useRef } from "react";
import CartHeader from "./cart";
//notification
import toast from "react-hot-toast";

import { AccountService, UserService } from "sk-customer-client-sdk";
//redux
import { useSelector, useDispatch } from "react-redux";
// import {ProfileData } from "../../../pages/api/redux/action/action";
import { getProfile } from "../../../pages/api/redux/action/profileAction";
import { logOut } from "../../../pages/api/redux/action/productAction";
import { getWishListStore, getCartStore } from "../../../pages/api/redux/action/productAction";

export default function HeaderMiddle(props) {
  const { config } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const store = useDispatch();
  let profileDetails = useSelector((state) => state.getProfileData);
  var wishListData = useSelector((state) => state.getWishListData);
  var cartItems;
  var cartData = useSelector(state => state.getCartData)
  if(cartData?.data?.status === 200){
    cartItems = cartData?.data?.data
  }

  const [cartCount, setCartCount] = useState(0);
  const [wishListCount, setWishListCount] = useState(0);
  const searchRef = useRef();
  var profileData = null;

  if(profileDetails?.data?.status === 200){
    profileData = profileDetails?.data?.data?.profile
  }

  useEffect(() => {
    const token = UserService.isAuthenticated();
    if (token) {
      setIsAuthenticated(true);
      if(!profileDetails){
        setTimeout(() => {
          store(getProfile());
        }, 1000);
      }
      
      if(!wishListData){
        setTimeout(() => {
          store(getWishListStore());
        }, 1000);
      }
      if(!cartData){
        setTimeout(() => {
          store(getCartStore());
        }, 1000);
      }
      
    } else {
      setIsAuthenticated(false);
      setCartCount(0);
    }
  }, []);

  useEffect(() => {
    if (wishListData?.isFetching == false) {
      setWishListCount(wishListData?.data?.data?.length);
      // localStorage.setItem("wishListData", JSON.stringify(wishListData?.data?.data));
    }
    if(cartData?.isFetching == false){
      setCartCount(cartData?.data?.data?.items?.length)
    }
    //set wishlist items to local storage
  }, [wishListData, cartData]);

 

  function logoutHandler() {
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
          Router.push("/");
        }, 1000);
      }
    });
  }

  const searchHandler = (e) => {
    e.preventDefault();
    const searchInput = searchRef.current.value;
    Router.push({
      pathname: "/shop",
      query: {keyword: searchInput}
    });
  };

  return (
    <>
      {config?.isBlockEnabled ? (
        <div className="container containerDiv px-lg-5">
          <div className={classes.headerMiddle}>
            <div className={classes.logo}>
              <Link href="/">
                <img
                  src={config?.elements?.websiteLogo?.logo?.value}
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </div>

            <div className={classes.searchBar+ " flex-fill ms-auto"}>
                <form className={classes.searchBarForm} onSubmit={searchHandler}>
                  <div className="input-group my-auto">
                    <input
                      type="text"
                      className="form-control py-sm-2 rounded-start"
                      placeholder={config?.elements?.searchBar?.searchBarText?.value}
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      ref={searchRef}
                      required
                    />
                    <button
                      type="submt"
                      className="input-group-text py-sm-2 rounded-end"
                      id="basic-addon2"
                      style={{ cursor: "pointer" }}
                    >
                      <BiSearchAlt />
                    </button>
                  </div>
                </form>
              </div>

            <div className={classes.headerRight}>
              

              <div className={classes.iconContainer}>
                <div className={classes.iconUser}>
                  <Link href={'/account/profile'}><a><FaUserAlt /></a></Link>
                  <div className={classes.userDropdown}>
                    <div className={classes.dropdownContainer}>
                      <strong>Welcome</strong>
                      <br />
                      {!isAuthenticated ? (
                        <>
                          <p className="text-muted mb-3">To access account and manage orders</p>
                          <div className={"border-bottom pb-4 " + classes.loginBtn}>
                            <Link href="/account/otp-login">
                              <a className="text-uppercase">Login / Signup</a>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="fw-bold mb-0">{profileData?.firstName}</p>
                          <p>{profileData?.mobileNumber}</p>
                          <ul className={"list-unstyled border-bottom pb-3 " + classes.list}>
                            <li>
                              <Link href="/account/orders">
                                <a className="text-muted">Orders</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/account/wishlist">
                                <a className="text-muted">Wishlist</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/account/savedProducts">
                                <a className="text-muted">Saved Products</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/account/quotes">
                                <a className="text-muted">Quotes</a>
                              </Link>
                            </li>
                          </ul>
                        </>
                      )}
                      <ul className={"list-unstyled " + classes.list}>
                        <li>
                          <Link href="/contact">
                            <a className="text-muted">Contact Us</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/account/coupons">
                            <a className="text-muted">Coupons</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/account/referrals">
                            <a className="text-muted">Invite & Earn</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/account/rewards">
                            <a className="text-muted">Rewards</a>
                          </Link>
                        </li>
                      </ul>
                      {isAuthenticated && (
                        <ul className={"list-unstyled " + classes.list}>
                          <li>
                            <Link href="/account/profile">
                              <a className="text-muted">Profile</a>
                            </Link>
                          </li>
                          <li>
                            <button
                              className="btn btn-sm btn-outline-danger rounded-0 w-75 mt-2"
                              onClick={logoutHandler}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                <div className={classes.iconWishlist + " position-relative"}>
                  <>
                    <Link href="/account/wishlist">
                      <a>
                        <FaHeart />
                        {wishListCount && wishListCount != 0 ? (
                          <span
                            className="position-absolute bg-secondary translate-middle badge rounded-pill"
                            style={{
                              color: "#fff",
                              left: "90%",
                              top: "5px",
                              fontWeight: "normal ",
                            }}
                          >
                            {wishListCount}
                          </span>
                        ) : (
                          <></>
                        )}
                      </a>
                    </Link>
                  </>
                </div>
                <div className={classes.iconCart + " position-relative pe-0"}>
                  <Link href={"/account/cart"}><a><FaShoppingCart /></a></Link>
                  {cartCount && cartCount != 0 ? (
                    <span
                      className="position-absolute bg-secondary translate-middle badge rounded-circle"
                      style={{
                        color: "#fff",
                        left: "90%",
                        top: "5px",
                        fontWeight: "normal ",
                      }}
                    >
                      {cartCount}
                    </span>
                  ) : (
                    <></>
                  )}
                  <CartHeader setCartCount={setCartCount} isAuthenticated={isAuthenticated} cartItems={cartItems} cartCount={cartCount} />
                </div>
                <div className={classes.iconMenu + " d-lg-none"}>
                  <button
                    className={classes.toggleBtn}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasMenu"
                    aria-controls="offcanvasMenu"
                  >
                    <FaBars />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
