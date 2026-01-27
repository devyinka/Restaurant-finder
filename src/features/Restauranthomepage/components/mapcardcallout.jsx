import styled from "styled-components/native";
import { Platform } from "react-native";

export default function Mapcard({ Info }) {
  return (
    <Display>
      {Platform.OS === "android" ? (
        <AndroidImage source={{ uri: Info.imageUrl }} />
      ) : (
        <IphoneImage source={{ uri: Info.imageUrl }} />
      )}
      <Restaurantname>{Info.name}</Restaurantname>
    </Display>
  );
}

const IphoneImage = styled.Image`
  border-radius: 10px;
  height: 100px;
  width: 100px;
`;

const AndroidImage = styled.Image`
  border-radius: 10px;
  width: 100px;
  height: 100px;
`;

const Display = styled.View`
  align-items: center;
  max-width: 90px;
  padding: 5px;
`;

const Restaurantname = styled.Text`
  font-family: ${(props) => props.theme.fonts.devyinka};
`;

// id: place.id,
//         name: place.poi.name,
//         address: place.address.freeformAddress,
//         phone: place.poi.phone,
//         latitude: place.position.lat,
//         longitude: place.position.lon,
//         distance: `${Math.round(place.dist)} meters away`,
//         isopenNow: isopenNow,
//         statustext: statustext,
//         imageUrl: imageUrl,
//         rating: (Math.random() * 5).toFixed(1),
//         reviews: Math.floor(Math.random() * 500) + 1,
