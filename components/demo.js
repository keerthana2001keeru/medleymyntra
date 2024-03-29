import React, { useCallback, useEffect, useRef, useState } from 'react';
// // import './galleryLightbox';
 import styles from "./demo.module.scss";
import LightGallery from 'lightgallery/react';
// import lgZoom from 'lightgallery/plugins/zoom';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// //import lgVideo from 'lightgallery/plugins/video';
// // lightgallery styles
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-video.css";
// import Link from 'next/link';



// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';




export default function Gallery() {

  //   return (
  //     <div className="App">

  //       <LightGallery
  //         elementClassNames="lg-custom-thumbnails"
  //         appendThumbnailsTo= '.lg-outer'
  //         playsInline = {true}
  //         download={false}
  //         speed={500}
  //         thumbnail= {true}
  //         animateThumb={false} 
  //         allowMediaOverlap= {true}
  //         //videojs = {true}

  //         plugins={[lgZoom, lgThumbnail]}
  //       >
  //      <div>
  //     <Link href="/img/pro3.jpg" >
  //                     <img alt="img1" src="/img/pro3.jpg" />
  //                 </Link>
  //                 <Link href="/img/pro4.jpg">
  //                     <img alt="img2" src="/img/pro4.jpg" />
  //                 </Link>
  //                 </div>
  //   </LightGallery>
  //     </div>
  //   );
  // }
  // function Gallery() {
  const onInit = () => {
  };
  return (

    <div className="container">
			<div className="row">
	        	<h2 className="text-center">Image Scroll on Hover</h2>
	        	<div className="col-md-4 col-md-offset-4 content">
			 <div className={styles.screen}>
						<img src="img/pro01.jpg" alt="img2"/>
					 </div> 

	        	</div>
			</div>
		</div>
     // <div className="App">
    //   <LightGallery
    //     playsInline={true}
    //     download={false}
    //     thumbnail={true}
    //     animateThumb={false}
    //     allowMediaOverlap={false}
    //     // //videojs = {true}

    //     elementClassNames="lg-custom-thumbnails"
    //     appendThumbnailsTo='.lg-outer'
    //     onInit={onInit}
    //     speed={500}
    //     plugins={[lgThumbnail, lgZoom]}
    //   >
    //     <a href="img/pro3.jpg" >
    //       <img alt="img1" src="img/pro3.jpg" className="img-fluid" />
    //     </a>
    //     <a href="img/pro01.jpg">
    //       <img alt="img2" src="img/pro01.jpg" className="img-fluid" />
    //     </a>

    //   </LightGallery>
    // </div>
//     <div className="App">
//     <LightGallery
//         onInit={onInit}
//         speed={500}
//         thumbnail={true}
//         plugins={[lgThumbnail, lgZoom]}
//         addClass= 'lg-custom-thumbnails'
//     appendThumbnailsTo= '.lg-outer'
//     animateThumb= {false}
//     allowMediaOverlap= {true}
//     >
//         <a href="img/pro3.jpg">
//             <img alt="img1" src="img/pro3.jpg" />
//         </a>
//         <a href="img/pro01.jpg">
//             <img alt="img2" src="img/pro01.jpg" />
//         </a>
        
//     </LightGallery>
// </div> 
  )
}
