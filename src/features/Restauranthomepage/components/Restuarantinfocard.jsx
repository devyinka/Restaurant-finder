import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Favourite } from "../../../utility/favourite";
export default function Restaurantinfo({ Info }) {
  return (
    <View style={styles.list}>
      <Card elevation={5} style={styles.card}>
        <Favourite />
        <Card.Cover style={styles.cover} source={{ uri: Info.imageUrl }} />
        {/* photos[0].html_attributions[0] */}
        <Container>
          <Name>{Info.name}</Name>
          <Section>
            <Star>
              {Array.from(new Array(Math.floor(Info.rating))).map((_, i) => (
                <SvgXml key={`star-${i}`} xml={star} width={20} height={20} />
              ))}
            </Star>
            <Sectionend>
              {!Info.isOpenNow ? (
                <Text style={{ color: "red" }}>Temporary closed</Text>
              ) : null}
              {Info.isOpenNow ? (
                <SvgXml xml={open} width={20} height={20} />
              ) : null}
            </Sectionend>
          </Section>
          <Area>{Info.address}</Area>
        </Container>
      </Card>
    </View>
  );
}

const Name = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
`;
const styles = StyleSheet.create({
  card: { backgroundColor: "white", marginBottom: 20 },
  cover: { padding: 20, backgroundColor: "white" },
  list: { flex: 1, padding: 10, backgroundColor: "aqua" },
});

const Container = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Area = styled.Text`
  font-family: ${(props) => props.theme.fonts.devyinka};
`;
const Star = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[0]};
  padding-bottom: ${(props) => props.theme.space[0]};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Sectionend = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

// id: place.id,
//         name: place.poi.name,
//         address: place.address.freeformAddress,
//         phone: place.poi.phone,
//         latitude: place.position.lat,
//         longitude: place.position.lon,
//         distance: `${Math.round(place.dist)} meters away`,
//         isOpenNow: isOpenNow,
//         statusText: statusText,

//         imageUrl: imageUrl,
//         rating: (Math.random() * 5).toFixed(1),
//         reviews: Math.floor(Math.random() * 500) + 1,
