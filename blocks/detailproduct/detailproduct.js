import Gallery from "../../components/demo";
import Demo from "../../components/demo2";
import Breadcrumbs from "../../components/product/detailbreadcrumb/detailbreadcrumb";
import ProductContent from "../../components/product/productcontent/productcontent";
import RelatedProducts from "../../components/product/productcontent/similarproducts/similarproduct";
import ProductImage from "../../components/product/productimage/productimage";
import { productimg } from "../../data/productimg";
import Router, { useRouter } from "next/router";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getCartStore, getWishListStore, clearData } from "../../pages/api/redux/action/productAction";
import { date } from "../../sk-components/date/date";
import { CatalogService, ReviewService, UserService, WishListService } from "sk-customer-client-sdk";
import { useState } from "react";
import Link from "next/router";
import { useEffect } from "react";
import { addItemToCart } from "../../pages/api/catalogService/addService";
import Spinner from "../../components/spinner/spinner";
export default function DetailBlock(props) {

  const { bannerImages } = props;
  const [loading, setLoading] = useState(() => false);
  const [item, setItem] = useState(() => null);
  const [rating, setRating] = useState("");
  const [breadcrumb, setBreadCrumb] = useState("");
  const [reviews, setReviews] = useState("");
  const [relProducts, setRelProducts] = useState(() => null);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const pdesc = router?.query?.productdetail;
  const [active, setActive] = useState("description");
  var dispatch = useDispatch();
  let wishListed = false;
  const categoryId = router?.query?.categoryId;
  const categoryName = router?.query?.categoryName;


  let wishListedData = useSelector((state) => state.getWishListData);
  var wishListedPrdts = null;
  if (wishListedData?.data?.status === 200) {
    wishListedPrdts = wishListedData?.data?.data
  }

  const [shareUrl, setShareUrl] = useState(null);
  // var shareUrl = "https://freshyhealthy.skartio.app"+url?.asPath

  useEffect(() => {
    setShareUrl(window.location.origin + router?.asPath)
  }, [])

  //get product description
  useEffect(() => {
    if (pdesc) {
      setLoading(true);
      //get product details
      CatalogService.getProductVariants(pdesc[1], "").then((response) => {

        if (response.data.status == 200) {
          setItem(response.data.data);
          setQuantity(response?.data?.data?.item?.availablity?.minQtyPerOrder)
          setTimeout(() => {
            ReviewService.getRatingsForProduct(response?.data?.data?.item?.MPN).then((res) => {
              if (res.data.status === 200) {
                setRating(res?.data?.data?.ratings);
              }
            });
          }, 500);
          setTimeout(() => {
            ReviewService.getReviewsForProduct(response?.data?.data?.item?.MPN).then((res) => {
              if (res.data.status === 200) {
                setReviews(res?.data?.data);
              }
            });
          }, 500);
        }
      });
      setLoading(false);
    }
  }, [pdesc]);


  //similar products
  useEffect(() => {
    const reqBody = {
      pathParams: {},
      data: {},
    };
    if (pdesc) {
      // getRelatedProducts(reqBody, pdesc[2]).then((response) => {
      CatalogService.getSimilarProducts(pdesc[1]).then((response) => {
        if (response.data.status == 200) {
          setRelProducts(response.data?.data);
        }
      });
    }
  }, [pdesc]);



  //add to cart api
  function addToCart(cin) {
    if (UserService.isAuthenticated()) {
      setLoading(true);

      addItemToCart(cin, quantity).then(response => {
        if (response === true) {
          toast.success("Item Added to Cart")
          dispatch(getCartStore());
          setLoading(false);
        }
        else {
          toast.error("Error adding Item to Cart");
          setLoading(false);
        }
      })


      dispatch(addToCartStore({ cin, quantity }));
      setTimeout(() => {
        store(getCartStore());
      }, 500);
    }


    else {
      localStorage.setItem('prevUrl', Router?.asPath)
      Router.push("/account/user-login");
    }
  }

  //breadcrumb
  //  useEffect(() => {
  //   CatalogService.getSubCategoriesUnderCategory(categoryId ? categoryId : "CA00436").then(
  //     (response) => {
  //       if (response.data.status === 200) {
  //         setBreadCrumb(response?.data?.data);
  //       } else {
  //       }
  //     }
  //   );
  // }, [categoryId, categoryName]);





  //ADD TO WISHLIST
  const addToWishlist = (mvn) => {
    if (UserService.isAuthenticated()) {
      WishListService.addToWishlist(mvn).then(
        response => {
          if (response?.data?.status == 200) {
            dispatch(getWishListStore());
             toast.success("Item Added to Wishlist")
          }
          else if (response.data.status == 203) {
            WishListService.removeFromWishlist(mvn).then(
              response => {
                if (response?.data?.status == 200) {
                  dispatch(getWishListStore());
                 toast.error("Item Removed from Wishlist")
                }
              }
            )
          }
        }
      )

    } else {
      localStorage.setItem('prevUrl', Router?.asPath)
      Router.push("/account/login");
    }
  };

  //filter Images
  const images = item?.item?.images.filter((element) => element.ContentType == "IMAGE" && element.ContentCategory !== "Icon" && element.ContentCategory !== "Thumbnail");

  //pinterest share media
  const media = images;

  //quantity adjust
  const decrementHandler = () => {

    if (quantity - 1 <= item?.item?.availablity?.minQtyPerOrder) {
      setQuantity(item?.item?.availablity?.minQtyPerOrder);
    }
    else {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const incrementHandler = () => {
    if (quantity + 1 > item?.item?.availablity?.qty) {
      setQuantity(item?.item?.availablity?.qty)
      return
    }
    else if (quantity + 1 < item?.item?.availablity?.maxQtyPerOrder) {
      setQuantity((prevCount) => prevCount + 1);
    }
    else {
      setQuantity(item?.item?.availablity?.maxQtyPerOrder);
    }
  };

  // condition to check if wishlisted
  var isWishListed = wishListedPrdts?.filter((e) => e.CIN === item?.item?.CIN);

  if (isWishListed && isWishListed?.length !== 0) {
    wishListed = true;
  } else {
    wishListed = false;
  }

  const cartItems = useSelector(state => state?.getCartData);
  var cartAdded;
  const cartPrdts = cartItems?.data?.data?.items?.filter((e) => e.cin === item?.item?.CIN)
  if (cartPrdts && cartPrdts?.length !== 0) {
    cartAdded = true;
  }
  else {
    cartAdded = false
  }

  //disabled button
  let disabled = false;
  if (item?.item.availablity.qty == 0 || item?.item.availablity.qty == null) {
    disabled = true;
  }
  else if (item?.item?.status?.outOfstock == true) {
    disabled = true
  }
  else if (item?.item?.status?.unavilable === true) {
    disabled = true
  }
  // var breadcrumbArray;

  // if (categoryList?.parentCategories?.length > 0) {
  //   var breadcrumbArray = categoryList?.parentCategories;
  //   let reversed = [...breadcrumb].reduce((acc, val) => [val, ...acc], []);
  //   let currentCategory = { name: categoryList?.name, catId: categoryList?.catId };
  //   breadcrumbArray = reversed.concat(currentCategory);
  // }



  return (


    <>
    {loading && <Spinner />}
      {/* <Breadcrumbs /> */}
      {/* <Breadcrumbs breadcrumb={breadcrumb} /> */}
      <div className="row">

        <ProductImage images={images} />

        <ProductContent
          ProductContent={item}
          RelProduct={relProducts}
          setRelProduct={setRelProducts}
        />


        {/* </ProductContent>  */}
        {/* <Demo/> */}
        <RelatedProducts
          RelatedProducts={relProducts}
        />
      </div>
     
    </>
  )
}