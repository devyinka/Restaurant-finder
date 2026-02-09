import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { PRODUCTION, DEVELOPMENT } from "@env";
import { createlocationcontex } from "../location/locationcontext";
export const Restaurantcontext = createContext();

export const Restaurantprovider = ({ children }) => {
  const API_URL = __DEV__ ? DEVELOPMENT : PRODUCTION;
  const [restaurant, setrestaurant] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [error, seterror] = useState(null);
  const { location } = useContext(createlocationcontex);

  const getRestaurant = async (place) => {
    setisloading(true);
    setrestaurant([]);
    try {
      const response = await axios.get(`${API_URL}/getrestaurant`, {
        params: {
          lat: place.lat,
          lng: place.lng,
        },
      });
      setrestaurant(response.data.data);
      setisloading(false);
      console.log("Fetched restaurants:", response.data.data);
    } catch (error) {
      setisloading(false);
      seterror(error);
      console.log(error);
    }
  };

  useEffect(() => {
    if (location.lat && location.lng) {
      getRestaurant(location);
    }
  }, [location]);

  return (
    <Restaurantcontext.Provider value={{ restaurant, isloading, error }}>
      {children}
    </Restaurantcontext.Provider>
  );
};
