import Link from "next/link";
 import styles from "./topbaroffer.module.scss";

export default function TopbarOffer() {

  return (
    <>


<section className={styles.nav} id="navBar">



<nav className={styles.nav + " navbar navbar-expand-lg navbar-light shadow-sm fixed-top heading fixed"}>
  <div className="container-fluid  d-flex justify-content-between align-items-center" >
    {/* <h1 className="logo me-auto"> */}



  
        <div className="bg-white">
          <div className="container px-lg-5 text-center text-dark fw-bold ">
            <div className="border-bottom py-2">
             
                <Link href="/"legacyBehavior>
                  <a className="text-decoration-none text-dark">fyjjfjm</a>
                </Link>
        
            
                <>
                &nbsp;|&nbsp;
                <Link href="/"legacyBehavior>
                    <a className="text-decoration-none text-dark"></a>
                  </Link>
                </>
           hmjjkh
      
                <>
                &nbsp;|&nbsp;
                <Link href="/"legacyBehavior>
                    <a className="text-decoration-none text-dark">fjfmm</a>
                  </Link>
                </>
            
            </div>
          </div>
        </div>
        </div>
</nav>
</section>


    </>
  );
}
