
import { useEffect, useState } from "react";
import styles from "./visitors-location.module.scss"
import { BiMap } from "react-icons/bi";


export default function VisitorsLocation(props) {

    const [userCity, setUserCity] = useState("")





    useEffect(()=>{


        
        if ('geolocation' in navigator) {
          
          navigator.geolocation.getCurrentPosition(

            function(position) {

              if(position){

              fetch('https://api.ipify.org?format=json')
              .then(response => response.json())
              .then(data => {
              
                const ipAddress = data.ip;
               
                if(ipAddress){
                  fetch(`https://get.geojs.io/v1/ip/geo/${ipAddress}.json`)
                    .then(response => response.json())
                    .then(data => {
                     //console.log("data",data)
                     //var cityName = data.city;
//console.log(cityName)
                      const cityName = data.city;
                      if(cityName){
                        setUserCity(cityName)
                    //console.log(countryName)
                      }
                    })
                    .catch(error => console.error('Failed to get country:', error));
                }
              })
              .catch(error => console.error('Failed to get IP address:', error));

            }
            },
            function(error) {
              switch (error.code) {
                case error.PERMISSION_DENIED:
                  console.error('User denied the request for geolocation.');
                  break;
                case error.POSITION_UNAVAILABLE:
                  console.error('Location information is unavailable.');
                  break;
                case error.TIMEOUT:
                  console.error('The request to get user location timed out.');
                  break;
                default:
                  console.error('An unknown error occurred while trying to get user location.');
                  break;
              }
            },
            
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      },[])
     

    return(

        <>
     <span> <i  className="d-flex justify-content-center align-items-center">  <BiMap /> 
deliver to     <b>{userCity}</b></i>  </span>


        </>
    )
}