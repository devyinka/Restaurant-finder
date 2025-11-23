import { useState, useEffect, createContext, useContext } from "react";
import { Transformdata,Servicerequest } from "./Restaurantservice";
import { createlocationcontex } from "../location/locationcontext";
export const Restaurantcontext=createContext();

export const Restaurantprovider=({children})=>{
    const [restaurant, setrestaurant]=useState([])
    const [isloading, setisloading]=useState(false)
    const [error, seterror]=useState(null)
    const {location}=useContext(createlocationcontex)

    const Retriverestaurant=(place)=>{
        setisloading(true);
         setrestaurant([]);
         setTimeout(() => {
            Servicerequest(place)
            .then(Transformdata)
            .then((response)=>{
                setisloading(false)
                setrestaurant(response)})
            .catch((err)=>{
                setisloading(false)
                seterror(err);
                console.log(err)})
        }, 2000);
    };
    useEffect(()=>{
     const locationString =location.lat+","+location.lng;
    console.log(locationString)
     Retriverestaurant(locationString);  
    },[location]);// i have to used location in my independent array if its not working
    
    return(
    <Restaurantcontext.Provider value ={{restaurant,
                                         isloading,
                                         error
                                        }}
    >
    { children}
    </Restaurantcontext.Provider>)
}