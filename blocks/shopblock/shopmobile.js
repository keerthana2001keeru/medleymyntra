import ProductListing from "../../components/shopPage/Mobile/productListing/productListing";
import {itemList} from "../../data/productsData"
import {TbDropletFilled} from "react-icons/tb"
import{BsSortDown,BsSortUp} from "react-icons/bs"
import {MdOutlineRecommend} from "react-icons/md"
import styles from "./shopmobile.module.scss"
import Modal from "../../sk-components/modal/modal";
//import FilterButton from "./filterButton/filterButton";

//import { icons } from "react-icons";
//import FilterButton from "../Mobile/filterButton/filterButton"
import { CgArrowsExchangeV,CgArrowsExchangeAlt } from "react-icons/cg";
import FilterButton from "../../components/shopPage/Mobile/filterButton/filterButton"
//import CustomModal from "../../sk-components/modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { CatalogService } from "sk-customer-client-sdk";
import { useRouter } from "next/router";
export default function ShopMobile(props) {
  const userSettings = props?.uiSettings;
  
  const router = useRouter();
  const { bannerImages, categoryList, category, keyword, supported } = props;
  const [pageNo, setPageNo] = useState(1);
 const [sortType, setSortType] = useState("popularity");
 const [categoryFilter, setCategoryFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [collectionsFilter, setCollectionsFilter] = useState([]);
  const [filterAttribute, setFilterAttribute] = useState([]);
  const [specificationFilter, setSpecificationFilter] = useState([]);
   const [productData, setProductData] = useState(null);
  const [noRecordFound, setNoRecordFound] = useState(false);
 const [error, setError] = useState(false);
 const [loading, setLoading] = useState(true);

   var visible = false;
//   //var noRecordFound = true;

  let dispatch = useDispatch();
 let productsList = useSelector((state) => state.productData);
   var pageCount = productData?.totalCount;
 const totalPageNum = pageNumber(pageCount);
  var items = productData?.data;

 // if (productsList?.data?.status === 203) {
 //     // noRecordFound = "no record";
 //  } else {
 //   //   noRecordFound = false;
 //    }

 function pageNumber(pageCount) {
    var pgCount = Math.ceil(pageCount / 40);
    return pgCount;
  }

  useEffect(() => {
    window.scrollTo({
     top: 0,
     behavior: "auto",
     /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
    window.addEventListener("scroll", toggleVisible);
  }, [pageNo]);

// get product list
 useEffect(() => {
   let body = {
     reqBody: {
       // category: {
       //   id: category ? category[1] : "",
       //   name: category ? category[0] : "",
       // },
       
       category: {
         id: "",
         name: "",
       },
       categories: categoryFilter,
       brands: brandFilter,
        collections: collectionsFilter,
        filters: filterAttribute,
        specification: specificationFilter,
       // categories: "",
       // brands: "",
       // collections: "",
       // filters: "",
       // specification: "",
       price: {
         minPrice: -1,
         maxPrice: -1,
       },
       type: 1,
       mode: "",
     },
     sortType: sortType,
     // keyword: keyword || "",
     pageNo: pageNo,
     // pageSize: 10,
     // sortType: "price_low_to_high",
    //  keyword:"",
    keyword: keyword || "",
     pageSize: 40,
   };
 //  debugger
   setLoading(true)
 setNoRecordFound(false)
   CatalogService.filterProducts(body.reqBody, body.keyword, body?.pageSize, body.pageNo, "asc", body.sortType)
      .then((response) => {
       // debugger
       if (response?.data?.status === 200) {
          setProductData(response?.data?.data);
       } else if (response?.data?.status == 203) {
  setNoRecordFound(true);
      } else {
 setNoRecordFound(true);
       }
      })
      .catch((error) => setError(true))
     .finally(() => setLoading(false));
 }, [
  pageNo,
 //   // category && category[0],
 sortType,
 categoryFilter,
  brandFilter,
  collectionsFilter,
  filterAttribute,
 specificationFilter,
 keyword,
]);

// scroll to top
  const toggleVisible = () => {
   const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      visible = true;
    } else if (scrolled <= 300) {
      visible = false;
    }
  };

 var breadcrumbArray;

  if (categoryList?.parentCategories?.length > 0) {
    var breadcrumb = categoryList?.parentCategories;
    let reversed = [...breadcrumb].reduce((acc, val) => [val, ...acc], []);
    let currentCategory = { name: categoryList?.name, catId: categoryList?.catId };
    breadcrumbArray = reversed.concat(currentCategory);
  }

 function setPageNumber(page) {
    setPageNo((prevState) => prevState + page);
  }


    return (
      <>
      <div className="container-fluid">
        <div className="row">
       
           {productData?.data?.map((item,index)=>(
                <div key={index} className="col-6">
                   
                <ProductListing productData={item}
                pageNo={pageNo}
                />
                
                </div>
            ))}
             {/* <div className="col-sm-6 col-md-6 co-lg-none">
              <SortButton />
            </div> */}
           
        </div>
        <div className={styles.footer + " row"}>
          <div className="col-6 text-center">
            <button
              type="button"
              className={styles["sortbtn"] + " btn"}
              data-bs-toggle="modal"
              data-bs-target="#sortModal"
            >
              <CgArrowsExchangeV />
              SORT
            </button>  
          </div> 
          <div className="col-6 text-center">
          <button type="button" className={styles["filterbtn"] + " btn"} data-bs-toggle="modal" data-bs-target="#filterModal">
           <CgArrowsExchangeAlt/>FILTER</button></div> 
        </div> 

      </div>
      <Modal id={"sortModal"} title="Sort By" screen="modal-dialog-centered">
            <ul className={styles["modalBody1"]}>

            <div>
            <select
              className="form-select rounded-0 border-dark"
              onChange={(e) => setSortType(e.target.value)}
            >
            
              <option
                className={props.sortType == "popularity" ? "fw-bold" : ""}
                value="popularity"
              >
                Popularity
              </option>
            <option className={props.sortType == "new" ? "fw-bold" : ""} value="new">
                What's New
              </option>
              <option className={props.sortType == "discount" ? "fw-bold" : ""} value="discount">
                Better Discount
              </option>
              <option
                className={props.sortType == "price_high_to_low" ? "fw-bold" : ""}
                value="price_high_to_low"
              >
                Price High to Low
              </option>
              <option
                className={props.sortType == "price_low_to_high" ? "fw-bold" : ""}
                value="price_low_to_high"
              >
                Price Low to High
              </option>
            </select>
            <button   className={styles["css-etguer"]}>
               <div className={styles["css-xjhrni"] }  data-bs-dismiss="modal">APPLY</div>
               </button>
          </div>

{/* 
                <li><TbDropletFilled/> Popularity</li>
                <li><MdOutlineRecommend/> Recommended</li>

                <li><BsSortDown/> Price:High to Low</li>
                <li><BsSortUp/> Price:Low to High</li> */}
              </ul>
      </Modal>  
      <Modal id={"filterModal"} title="Filter By" screen="modal-fullscreen-md-down">
           <FilterButton
             items={productData?.filters}
             pageNo={pageNo}
             categoryFilter={categoryFilter}
             setCategoryFilter={setCategoryFilter}
             brandFilter={brandFilter}
             setBrandFilter={setBrandFilter}
             collectionsFilter={collectionsFilter}
             setCollectionsFilter={setCollectionsFilter}
             filterAttribute={filterAttribute}
             setFilterAttribute={setFilterAttribute}
             specificationFilter={specificationFilter}
             setSpecificationFilter={setSpecificationFilter}
           
           />
      </Modal>

      </>    
    )
}