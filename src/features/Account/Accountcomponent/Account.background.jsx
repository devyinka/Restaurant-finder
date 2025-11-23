import styled from "styled-components/native"
import { colors } from "../../../infastructure/theme/color";
import { Button } from "react-native-paper";

export const Imagebackground=styled.ImageBackground.attrs({source:require('../../../../assets/AccountBackgroundimage.jpg')})`
flex:1;
align-items:center;
justify-content:center;
`;

export const Imagecover=styled.View`
position:absolute;
width:100%;
height:100%;
background-color:rgba(255, 215,25,0.3);
`;

export const Imagecontainer=styled.View`
background-color:rgba(255, 215,25,0.7);
padding:${(props)=>props.theme.space[4]};
margin-top:${(props)=>props.theme.space[2]};
`;

export const Authenticationbutton=styled(Button).attrs({
    color:colors.brand.secondary,
})`
margin-top:1px;
padding:2px;
`;

export const Title=styled.Text`
font-size:30px;
color:blue`
 

export const Errorcontainer=styled.Text`
max-width:300px;
align-items:center;
align-self:center;
margin-top:${props=>props.theme.space[2]};
margin-bottom:${props=>props.theme.space[2]};
`;

export const AnimationWrapper=styled.View`
width:100%;
heigth:40%;
position:absolute;
top:30px;
padding:${props=>props.theme.space[2]};
`;