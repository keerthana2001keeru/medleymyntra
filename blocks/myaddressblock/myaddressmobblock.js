import AddressPage from "../../components/addresspage/address";
import DefaultAddress from "../../components/defaultaddress/defaultaddress";
import Modal from "../../components/my-cart/modal/p modal";
import styles from './myaddressblock.module.scss';









export default function MyAddressmobbBlock (){

    return (
        <>
       
      
      
    
      
  
        <div className={styles.paadding + " col-lg-6 "}>
        <div className={styles["addressList-base-titleContainer"]}>
        <div className={styles["addressList-base-title"]}>Saved Addresses</div>
        <button fontSize="body3" fontWeight="bold" role="button" className={styles["css-1qjnrii"]} data-bs-toggle="modal" data-bs-target="#address" >
        <div className={styles["css-xjhrni"]}>+ ADD NEW ADDRESS </div>
        </button> 
        <Modal header="ADD NEW ADDRESS" example="address">
        <AddressPage />
        </Modal>  
        </div>
        <DefaultAddress/>
        </div>
      
        </>
)}