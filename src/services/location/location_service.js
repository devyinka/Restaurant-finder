// import { locations } from "../../../functions/Geocode/location_mock" it can only work on IOS(CORS policy)
import { locations } from "./location_mock";
export const Location_request= async (Searchrequest)=>{
    // const  response = await fetch (`http://127.0.0.1:5001/mealmile-application/us-central1/geocode?city=${Searchrequest}`)
    // return  await response.json();// it will not work on andriod 
    return new Promise((resolve,reject)=>{ 
        Location=locations[Searchrequest];
        if(!Location){
            reject("corrupt")
        }
        else{
            resolve(Location)
        }
    })
}

export const  LocationTransform=({results})=>{
     console.log(results)
     const {geometry={}}=results[0];
     const {lat,lng}=geometry.location;
     return {lat,lng, viewport:geometry.viewport}
}
//  useEffect(()=>{
//       async function fetchRecipe(){
//       let res= await fetch(`${URL}?query=${Query}&apiKey=${API_key}`);
//       let response= await res.json ();
//       setRecipe(response.results);
//       }  fetchRecipe();},[])