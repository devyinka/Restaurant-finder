import { createContext, useState} from "react";

export const Favouritecontex=createContext();

export const Favouriteprovider=({children})=>{
    const [favourites,setfavourites]=useState([]);

    const Addfavourite=(restaurant)=>{
        const newfavourite=([...favourites,restaurant]);
        setfavourites(newfavourite)
    }

    const RemoveFavourite=(restaurant)=>{
    setfavourites(favourites.filter((data)=>data.placeId !==restaurant.placeId))
    }

return(<Favouritecontex.Provider value={{favourites,Addfavourite:Addfavourite, RemoveFavourite:RemoveFavourite  }}>
    {children}
 </Favouritecontex.Provider>)
};

