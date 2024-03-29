import NavbarBlock from '../navbarblock/navbarblock'
import Sidecard from "../../components/homepage/sidecard/sidecard"
import Footer from '../../components/footer/footer'
import Navbar from '../../components/homepage/navbar/navbar'
import TopbarOffer from '../../components/topbaroffer/topbaroffer'
export default function LayoutCommon(props){
    const headerConfigu = props?.children?.props?.uiSettings?.MT00030C06
    const sidecard = props?.children?.props?.uiSettings?.MT00030C07
    const footercommon = props?.children?.props?.uiSettings?.MT00030C08

    return(
        <div className="content">
          
            <Navbar headerConfig={headerConfigu}/>
           <Sidecard  card={sidecard}/> 
      {props.children}
        
      <Footer footr={footercommon}/>
        </div>
    )
}