import styles from './wishlist.module.scss';
import Link from "next/link";
import { TiDeleteOutline } from "react-icons/ti";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { BsHandbag } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";
import React, { Component } from "react";
import Slider from "react-slick";
import { simiproduct } from '../../data/similarpro';

import { useState } from "react";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { CartService, UserService, WishListService } from "sk-customer-client-sdk";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getWishListStore, getCartStore } from "../../pages/api/redux/action/productAction";

import { toast } from 'react-hot-toast';
import Spinner from '../spinner/spinner';

//notification




export default function WishList(props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const { userSettings } = props;
  var wishListItems = null;
  var noRecordFound = false;

  const dispatch = useDispatch();
  const wishlistReducer = useSelector((state) => state.getWishListData);
  if (wishlistReducer?.data?.status === 200) {
    wishListItems = wishlistReducer?.data?.data;
  }
  else if (wishlistReducer?.data?.status === 203) {
    noRecordFound = true;
  }


  //call wishlist action
  useEffect(() => {
    if (UserService.isAuthenticated()) {
      dispatch(getWishListStore())
    } else {
      router.push("/account/login");
    }
  }, []);

  const removeWishList = (id) => {
    setLoading(true)
    WishListService.removeFromWishlist(id).then((response) => {
      if (response.data.status === 200) {
        dispatch(getWishListStore())
        toast.success("Removed Item from Wishlist")
        setLoading(false)
      } else if (response.data.status === 203) {
        setLoading(false)
        toast.error('No record Found')
      } else {
        setLoading(false)
        toast.error('Unexpected Error')
      }
    });
  };

  const moveToCart = (cin, mvn) => {
    setLoading(true)
    CartService.addToCart(cin, 1).then((response) => {
      if (response.status === 200) {
        dispatch(getCartStore())
        toast.success('Item Moved to Cart')
        WishListService.removeFromWishlist(mvn).then((response) => {
          if (response.data.status === 200) {
            dispatch(getWishListStore());
            setLoading(false)

          } else if (response.data.status === 203) {
            setLoading(false)
            toast.error('No record Found')
          } else {
            setLoading(false)
            toast.error('Unexpected Error')
          }
        });
      } else {
        toast.error('Unexpected Error. Please Try again')
        setLoading(false)
      }
    });
  };

  return (


    <>

      <div >
        <div className="container">

          {/* {loading && <Spinner />} */}

          {!noRecordFound ? (
            <div>
              <div className={styles.grid}>
                {wishListItems?.map((item, index) => {
                  const image = item?.images?.find(
                    (element) => element?.ContentCategory === "Detail"
                  );
                  return (

                    <div key={index}>
                      <div className={styles["product-wap"] + " card  product-wap rounded-0"}>
                        <div className={styles["card"] + " card rounded-0"}>
                          <Link href={"/shop" + item?.productHandler || ""} target="_blank">
                            {/* <img src={image?.ContentAddress} alt="" className={styles.image + " image-base-imgResponsive"} /> */}

                            <img src={image?.ContentAddress} alt="" className={styles.image + " w-100 card-img-top image-base-imgResponsive d-flex align-items-center"} />
                          </Link>
                          {/* <img src={image?.ContentAddress || "#"} className="card-img rounded-0 img-fluid" alt="" /> */}

                          <div className={styles["itemcard-removeIcon"]}>

                            <div className={styles.removeBtn}>
                              <button onClick={() => removeWishList(item.MVN)}>
                                <i>  <TiDeleteOutline /></i>
                              </button>
                            </div>

                          </div>

                        </div>
                        <div className={styles.cardbody + " card-body"}>
                          <div >
                            <p className={styles["product-item-brand"] + " text-truncate"}>{item?.properties?.PRODUCTNAME
                              ?.value}</p>
                            <div className={styles["product-item-pricing"]}>
                              <div className={styles["product-item-selling-price"]}>
                                Rs. {item?.price?.prdBuyBoxPrice}

                                {item?.price?.prdBuyBoxPrice !== item?.price?.prdDisplayPrice ? (

                                  <div className={styles["product-item-mrp"]}> <s> Rs. {item?.price?.prdDisplayPrice}</s>

                                    <span className={styles["product-item-discount"]}>

                                      {/* ({discount} % OFF ) */}

                                      (
                                      {Math.ceil(((item?.price?.prdDisplayPrice - item?.price?.prdBuyBoxPrice) /
                                        item?.price?.prdDisplayPrice) *
                                        100
                                      )}
                                      % off)


                                    </span>
                                  </div>
                                ) : null}
                              </div>
                            </div>


                            <div className={styles["cartFillerProduct-base-button"]}>
                              {/* <Link href="/account/cart"> Add To Bag </Link> */}
                              <div className={styles["form-group"]}>

                                {/* <button className={styles["submitButton"]} id=""> Move to cart</button> */}
                              </div>
                              <button className={styles["submitButton"]} onClick={() => moveToCart(item?.CIN, item?.MVN)}>
                                Move to cart
                              </button>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>

                  )
                })}
              </div>
            </div>
          ) : (

            <div className="text-center">
              <img src={userSettings?.elements?.emptyWishlist?.image?.value} width="150" alt="" />
              <p className="mt-3">Your Wishlist is Empty</p>
            </div>
          )}




        </div>

      </div>


    </>
  )
}