import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const createlocationcontex = createContext();

const API_URL = "https://conjugally-unciteable-charline.ngrok-free.dev";
console.log("API_URL:", API_URL);
export const LocationContexProvider = ({ children }) => {
  const [keyword, setkeyword] = useState("chicago");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [location, setlocation] = useState({
    lat: null,
    lng: null,
  });

  const onSearch = (searchkeyword) => {
    setkeyword(searchkeyword);
    if (!searchkeyword.length) {
      return;
    }

    const getlatlong = async (searchkeyword) => {
      setloading(true);
      try {
        const Response = await axios.post(`${API_URL}/getlatlog`, {
          address: searchkeyword.toLowerCase(),
        });
        setlocation({
          lat: Response.data.latitude,
          lng: Response.data.longitude,
        });
        console.log("Backend location data:", Response.data);
      } catch (err) {
        console.error("Location search error:", err);
        seterror(err);
      } finally {
        setloading(false);
      }
    };
    getlatlong(searchkeyword);

    // Location_request(searchkeyword.toLowerCase())// i willl comment all this function out and delete location_service mock data later
    //   .then((locationData) => {
    //     console.log("Location data received:", locationData);
    //     return LocationTransform(locationData);
    //   })
    //   .then((response) => {
    //     console.log("Location transformed:", response);
    //     setloading(false);
    //     setlocation(response);
    //   })
    //   .catch((err) => {
    //     console.log("Location search error:", err);
    //     seterror(err);
    //     setloading(false);
    //   });
  };

  useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <createlocationcontex.Provider
      value={{
        keyword,
        loading,
        error,
        location,
        Search: onSearch,
      }}
    >
      {children}
    </createlocationcontex.Provider>
  );
};
