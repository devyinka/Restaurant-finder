import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { PRODUCTION, DEVELOPMENT } from "@env";
export const createlocationcontex = createContext();

const API_URL = __DEV__ ? DEVELOPMENT : PRODUCTION;
console.log("API_URL:", API_URL);
console.log("Environment:", __DEV__ ? "Development" : "Production");
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
