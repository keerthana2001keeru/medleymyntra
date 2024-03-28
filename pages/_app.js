import '../styles/globals.scss'
import "../styles/bootstrap.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';
import Router, {useRouter} from "next/router";
import "react-phone-input-2/lib/style.css";
//notification
 import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "../redux/store";
// import LayoutCommon from '../blocks/layoutblock/Layout';
// import LayoutHome from '../blocks/layoutblock/LayoutHome';

// const layouts = {
//   L1: LayoutCommon,
//   L2: LayoutHome
//   // L2: Layout2,
//   // L3: Layout3,
// };

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  // const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <>
 <Provider store={store}>
 <Toaster
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#fff",
              border: "1px solid #f28b00",
              color: "#f28b00",
              borderRadius: "0",
              zIndex: "999999!important",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
    
      {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  )
}











