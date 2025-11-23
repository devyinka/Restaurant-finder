import { StyleSheet, View ,Text} from "react-native"
import { Card } from "react-native-paper"
import styled from "styled-components/native"
import { SvgXml } from "react-native-svg"
import star from "../../../../assets/star"
import open from "../../../../assets/open"
import { Favourite } from "../../../utility/favourite"
export default function Restaurantinfo({Info}){
return(
<View style={styles.list}>
      <Card elevation={5} style={styles.card}>
         <Favourite/>
         <Card.Cover style={styles.cover} source={{uri:Info.photos[0].html_attributions[0]}}/>
         <Container>
            <Name>{Info.name}</Name>
            <Section>
            <Star>
               { (Array.from(new Array(Math.floor(Info.rating))))
                .map((_,i)=>(<SvgXml key={`star-${i}`} xml={star} width={20} height={20} />))}
            </Star>
            <Sectionend>
               {Info.isClosedTemporarily ?(<Text style={{color:"red"}}>Temporary closed</Text>):null}
               {(Info.isOpenNow?(<SvgXml xml={open} width={20} height={20}/>):null)}
            </Sectionend>
            </Section>
            <Area>{Info.vicinity}</Area>
         </Container>
      </Card> 
</View>
)
}



const Name=styled.Text`
font-family:${(props)=>props.theme.fonts.heading};
`;
const styles=StyleSheet.create({
    card:{ backgroundColor:"white",
           marginBottom:20
         },
    cover:{padding:20,
          backgroundColor:"white"
          },
    list: {flex:1, 
           padding:10,
           backgroundColor:"aqua"}
}) 


const Container=styled.View`
padding:${props=>props.theme.space[3]};
`;

const Area=styled.Text`
font-family:${props=>props.theme.fonts.devyinka};
`;
const Star=styled.View`
flex-direction:row;
padding-top:${props=>props.theme.space[0]};
padding-bottom:${props=>props.theme.space[0]};
`;
const Section=styled.View`
flex-direction:row;
align-items:center;
`;
const Sectionend=styled.View`
flex:1;
flex-direction:row;
justify-content:flex-end`;
