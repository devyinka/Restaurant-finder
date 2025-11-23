import { Callout, Marker } from "react-native-maps";
import { AreaView } from "../../../utility/saveareaview";
import styled from "styled-components";
import MapSearchBar from "../components/map_search_bar";
import { createlocationcontex } from "../../../services/location/locationcontext";
import { Restaurantcontext } from "../../../services/Restaurant/Restaurantcontentx";
import { useContext, useEffect, useState } from "react";
import Mapcard from "../components/mapcardcallout";
import MapView from "react-native-maps";

export default function Mapscreen({navigation}){
const {location}=useContext(createlocationcontex)
const {restaurant=[]}=useContext(Restaurantcontext)
const [latdelta, setlatdelta]=useState(null);
if (!location || !location.lat || !location.lng || !location.viewport) {
  return null}
const {lat, lng, viewport}=location;
console.log(viewport)// i will later delete this

useEffect(() => {
  const northeastLat = viewport.northeast.lat;
  const southwestLat = viewport.southwest.lat;
  const deltaLat = northeastLat - southwestLat;
  setlatdelta(deltaLat);
}, [location, viewport]);

return(
   <AreaView>
    <MapSearchBar/> 
    <Map  region={{latitude:lat , longitude:lng, latitudeDelta:latdelta, longitudeDelta:0.02}}>
    {restaurant.map((restaurant)=>(<Marker
          key={restaurant.id}
          title={restaurant.name}
          coordinate={{
          latitude: restaurant.geometry.location.lat,
          longitude: restaurant.geometry.location.lng,
          }}
        >
          <Callout onPress={()=>navigation.navigate("Detail",restaurant)}>
            <Mapcard Info={restaurant} />
          </Callout>
        </Marker>
    ))}
    </Map>
    </AreaView>
);
}

const Map=styled(MapView)`
width:100%;
height:100%;
`;




// region={{ latitude: lat, longitude: lng, latitudeDelta: latdelta, longitudeDelta: 0.02 }}

