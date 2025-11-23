import styled from "styled-components/native"
import { Platform } from "react-native";
import WebView from "react-native-webview";
    
export default function Mapcard({Info}){
    
   return(
        <Display>
        {Platform.OS=="android"?<AndriodImage source={{uri:Info.photos[0].html_attributions[0]}}/>
                                :<IphoneImage source={{uri:Info.photos[0].html_attributions[0]}}/> }
        <Restaurantname>{Info.name}</Restaurantname>
        </Display>
      
    )
}

const IphoneImage=styled.Image`
border-radius:10px;
height:100px;
width:100px;
`;

const AndriodImage=styled(WebView)`
border-radius:10px;
width:100px;
height:100px;
`;

const Display=styled.View`
align-items:center;
max-width:90px;
padding:5px;
`;

const Restaurantname=styled.Text`
font-family:${(props)=>props.theme.fonts.devyinka};
`;