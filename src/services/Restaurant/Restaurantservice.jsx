import { mocks } from "./Restuarant.mock";
// import { mocks } from "../../../functions/placenearby/mockplaceapi_service";// serverless it can only works on IOS
export  const  Servicerequest= async (location)=>{
// let response = await fetch(`http://127.0.0.1:5001/mealmile-application/us-central1/Nearbyplace?location${location}`)
// return response.json();// cross origin can work on Andriod
   return new Promise((resolve,reject)=>{
    const mock=mocks[location];
    if(!mock){
        reject("its not found")
    }
    resolve(mock)
   });}


 export const Transformdata=({results=[]})=>{
    mapresult=(results.map((restaurant)=>{
      //  (results.map((restaurant)=>
      // (restaurant.photos[0].html_attributions[0]=mockImages[Math.floor(Math.random() * (mockImages.length))])))// i will remove this if not working as intended
        return{
        ...restaurant, 
        isOpenNow:restaurant.opening_hours && restaurant.opening_hours.open_now,
        isClosedTemporarily:restaurant.business_status==="CLOSED_TEMPORARILY",
        id: restaurant.place_id,
        }
 }
        
))
 return mapresult
 }

  // export const photos=({results=[]})=>{
  //   mapresult=(results.map((restaurant)=>
  //     (restaurant.photos[0].html_attributions[0]=mockImages[Math.floor(Math.random() * (mockImages.length))])))}

//  export const Transformdata = ({ results = [] }) => {
//   const mapresult = results.map((restaurant) => {
//     restaurant.photos = restaurant.photos
//       ? restaurant.photos.map(() => mockImages[Math.floor(Math.random() * mockImages.length)])
//       : [mockImages[Math.floor(Math.random() * mockImages.length)]];
//     return {
//       ...restaurant,
//       isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
//       isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
//       id: restaurant.place_id, // Ensure id exists for FlatList
//     };
//   });
//   return mapresult;
// };

// //  Servicerequest()
// // .then(Transformdata)
// // .then((transformresponse)=>{
// //    console.log(transformresponse);
// // })
// // .catch((err)=>{
// //    console.log(err)
// // })




//     Servicerequest().catch((err)=>{
//     console.log(err)
//    })
//    console.log(mock)
    

