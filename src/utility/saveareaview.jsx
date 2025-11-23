import {StatusBar ,SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const  AreaView=styled(SafeAreaView)`
 flex: 1;
 margin-top: ${() => (StatusBar.currentHeight ? "3px" :null)};
 background-color:${(props)=>props.theme.colors.bg.primary}
`;
// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};`;
