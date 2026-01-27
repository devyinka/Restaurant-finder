// import { locations } from "../../../functions/Geocode/location_mock" it can only work on IOS(CORS policy)
import { locations } from "./location_mock";
export const Location_request = async (Searchrequest) => {
  return new Promise((resolve, reject) => {
    const location = locations[Searchrequest];
    if (!location) {
      reject("corrupt");
    } else {
      resolve(location);
    }
  });
};

export const LocationTransform = ({ results }) => {
  console.log("LocationTransform input:", { results });
  if (!results || !Array.isArray(results) || results.length === 0) {
    throw new Error("Invalid location data");
  }
  const { geometry = {} } = results[0];
  const { lat, lng } = geometry.location;
  const viewport = geometry.viewport;
  console.log("LocationTransform output:", { lat, lng, viewport });
  return { lat, lng, viewport };
};
