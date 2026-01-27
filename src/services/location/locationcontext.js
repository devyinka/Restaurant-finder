import { createContext, useState, useEffect } from "react";
import { LocationTransform, Location_request } from "./location_service";

export const createlocationcontex = createContext();

export const LocationContexProvider = ({ children }) => {
  const [keyword, setkeyword] = useState("chicago");
  const [loading, setloading] = useState(false);
  const [erro, seterror] = useState(null);
  const [location, setlocation] = useState({
    lat: null,
    lng: null,
    viewport: null,
  });

  const onSearch = (searchkeyword) => {
    setkeyword(searchkeyword);
    setloading(true);
    if (!searchkeyword.length) {
      return;
    }

    Location_request(searchkeyword.toLowerCase())
      .then((locationData) => {
        console.log("Location data received:", locationData);
        return LocationTransform(locationData);
      })
      .then((response) => {
        console.log("Location transformed:", response);
        setloading(false);
        setlocation(response);
      })
      .catch((err) => {
        console.log("Location search error:", err);
        seterror(err);
        setloading(false);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <createlocationcontex.Provider
      value={{
        keyword,
        loading,
        erro,
        location,
        Search: onSearch,
      }}
    >
      {children}
    </createlocationcontex.Provider>
  );
};
