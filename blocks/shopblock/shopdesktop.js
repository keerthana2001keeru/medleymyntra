 import HeadrTop from "../../components/shopPage/headerTop/headerTop";
 import SidebarFilter from "../../components/shopPage/sidebarFilter/sidebarFilter";
 import HeaderMiddle from "../../components/shopPage/headerMiddle/headerMiddle";
 import TopFilter from "../../components/shopPage/topFilter/topFilter";
import ProductItem from "../../components/shopPage/productItem/productItem";
 import { product } from "../../data/products";
 import PaginationBar from "../../components/shopPage/paginationBar/paginationBar";
// import SortButton from "../../components/shopPage/Mobile/sortButton/sortButton";
import styles from "../../components/shopPage/paginationBar/paginationBar.module.scss"
import { useEffect, useState } from "react";

import { CatalogService } from "sk-customer-client-sdk";
//redux
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../../pages/api/redux/action/productAction";
import { useRouter } from "next/router";
import Spinner from "../../components/spinner/spinner";
export default function ShopDesktop(props) {
  const userSettings = props?.uiSettings;
  
  const router = useRouter();

  const { bannerImages, categoryList,keyword, supported } = props;
  const category = props?.category;
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
      keyword: keyword || "",
      // keyword:"",
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
    {loading && <Spinner/>}
    <div className="container-fluid">
         
      <div className="row">
      <div className="py-5" > 
        {/* <HeadrTop/>  */}
        <ul className={"d-flex list-unstyled " + styles.breadcrumbList}>
          
          {breadcrumbArray?.length > 0 &&
          
            breadcrumbArray?.map((item, index) => (
              
              <li key={index}>
                
                <Link href={`${item?.name}/${item?.catId}`} legacyBehavior>
                  
                  <a className="d-flex align-items-center text-decoration-none">
                    <span>{item?.name}</span>
                  </a>
                </Link>
              </li>
            ))}
        </ul>
       

</div>
        {/* <HeaderMiddle /> */}
        <div className="row">
          <div className="col-lg-3 col-md-3 py-5">
            <SidebarFilter
            
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
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="row">
              
              <TopFilter sortType={sortType}
                   setSortType={setSortType} 
                   pageNo={pageNo}
                   />
            </div>
            
            <div className="row pb-5 mb-4">
              {productData?.data?.map((item, index) => (
                <div key={index} className="col-lg-3  col-md-4  mb-4 mb-lg-0">
                  <ProductItem productData={item}
                    pageNo={pageNo}
                    />
                  
                </div>
              ))}
            </div>



         {/* <div className="container text-align-center">
              <PaginationBar />
            </div>   */}


           {totalPageNum > 1 && (
                  <nav aria-label="Page navigation example">
                    <ul className={styles["pagination"] + " pagination justify-content-center"}>
                      {pageNo != 1 && (
                        <li className="page-item">
                          <button
                            className="page-link rounded-0 text-dark"
                            tabIndex="-1"
                            style={{ boxShadow: "none" }}
                            onClick={() => setPageNo(-1)}
                          >
                            Previous
                          </button>
                        </li>
                      )}
                      <li className="page-item">
                        <button
                          className="page-link rounded-0 bg-dark"
                          style={{ color: "#fff" }}
                        >
                          {pageNo}
                        </button>
                      </li>
                      {totalPageNum - pageNo != 0 && (
                        <li className="page-item">
                          <button
                            className="page-link rounded-0 text-dark"
                            style={{ boxShadow: "none" }}
                            onClick={() => setPageNo(1)}
                          >
                            {pageNo + 1}
                          </button>
                        </li>
                      )}
                      {totalPageNum - pageNo > 1 && (
                        <li className="page-item">
                          <button
                            className="page-link rounded-0 text-dark"
                            style={{ boxShadow: "none" }}
                            onClick={() => setPageNo(2)}
                          >
                            {pageNo + 2}
                          </button>
                        </li>
                      )}
                      {
                        <li
                          className={pageNo == totalPageNum ? "d-none" : "page-item "}
                          style={{ cursor: "pointer" }}
                        >
                          <button
                            className="page-link rounded-0 text-dark"
                            style={{ boxShadow: "none" }}
                            onClick={() => setPageNo(prevState => prevState+1)}
                          >
                            Next
                          </button>
                        </li>
                      }
                    </ul>
                  </nav>
                )}
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
}

