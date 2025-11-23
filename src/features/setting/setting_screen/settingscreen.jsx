import { useContext, useEffect, useState } from "react";
import { AreaView } from "../../../utility/saveareaview";
import { Authenticationcontex } from "../../../services/firebase/firebasecontextprovider"; 
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";
import { getAuth } from "firebase/auth";
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingScreen=({navigation})=>{

    const {Signout, user}=useContext(Authenticationcontex);
    const [photo, setphoto]=useState("");
    const User=getAuth().currentUser;// to get the current user in other to display email of user in setting page

 const handleSignOut = () => {
  Alert.alert(
    'Confirm Sign Out',
    'Are you sure you want to sign out?',
    [
      {
        text: 'No',
        onPress: () =>null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress:() => {
        Signout()}}])}

   const getprofilephoto=async (currentuser)=>{
    const photouri=AsyncStorage.getItem(`${currentuser.uid}-photo`)
    console.log(photouri)
    if(photouri){
      Jsonvalue=JSON.parse(photouri) 
       setphoto(Jsonvalue)
   }
  }
   useFocusEffect(()=>{
    getprofilephoto(user);
   })
   
    return(
        <AreaView>
        <Avatarcontainer>
        <TouchableOpacity onPress= {()=>navigation.navigate("Camera")}>
        {!photo? <Avatar.Icon icon="human"  size={100} color= "green" backgroundColor="pink"/>:
         <Avatar.Image source={{uri:photo}} size={100} backgroundColor="pink"/>}
        </TouchableOpacity>
        <Useremail>
           {User.email} 
        </Useremail>
        </Avatarcontainer>
        <List.Section>
        <Settingitem
        title="logout"
        description="log out here"
        onPress={()=>handleSignOut()}
        left={props => <List.Icon {...props} icon="door-open"/> }/>
         </List.Section>
        </AreaView>
       
    )
    }
  

    const Settingitem=styled(List.Item)`
    padding:${props=>props.theme.space[2]};`;

    const Avatarcontainer=styled.View`
    alignItems:center`;

    const Useremail=styled.Text`
    padding:2px;
    margin:2px`;

    export  default SettingScreen;
