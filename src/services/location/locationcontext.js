import {createContext, useState } from "react";
import { LocationTransform,Location_request } from "./location_service";


export const  createlocationcontex=createContext()

export const LocationContexProvider=({children})=>{
    const [keyword, setkeyword]=useState("chicago");
    const [loading, setloading]=useState(false)
    const [erro, seterror]=useState(null)
    const [location, setlocation]=useState({lat:null, lng:null, viewport:null});

    const onSearch=(searchkeyword)=>{
        setkeyword(searchkeyword);
        setloading(true)
        if(!searchkeyword.length){
          return;
        }
        
        Location_request(searchkeyword.toLowerCase())
        .then(LocationTransform)
        .then((response)=>{
            setloading(false);
            setlocation(response);
            // console.log(location)
        }).catch((err)=>{
            seterror(err)
            setloading(false)
        })
    };

 
  return( <createlocationcontex.Provider value={{
    keyword,
    loading,
    erro,
    location,
    Search:onSearch
    }}>
    {children}
  </createlocationcontex.Provider>)
}