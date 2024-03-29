import Foot from '../../components/footer/foot'
import Footer from '../../components/footer/footer'
import FooterHome from '../../components/footer/footerHome'
import Navbar from '../../components/homepage/navbar/navbar'
import Sidecard from '../../components/homepage/sidecard/sidecard'
import TopbarOffer from '../../components/topbaroffer/topbaroffer'
import NavbarBlock from '../navbarblock/navbarblock'
export default function LayoutHome(props){
    const sidecard = props?.children?.props?.uiSettings?.MT00030C07
    const headerConfig = props?.children?.props?.uiSettings?.MT00030C06
    const foot = props?.children?.props?.uiSettings?.MT00030C08
    return(
        <div className="content">
              
            <Navbar headerConfig={headerConfig}/>
            <Sidecard  card={sidecard}/>
        {props.children}
        
        <Footer footr={foot} />
       
       <Foot footr={foot}/>
   
        </div>
    )
}

