import {Imagebackground, Imagecover, Imagecontainer } from "../Accountcomponent/Account.background";
import { Input } from "../Accountcomponent/input";
import { Title } from "../Accountcomponent/Account.background";
import { useContext, useState } from "react";
import { Authenticationcontex } from "../../../services/firebase/firebasecontextprovider";
import { Authenticationbutton } from "../Accountcomponent/Account.background";
import { Errorcontainer } from "../Accountcomponent/Account.background";
import { ActivityIndicator } from "react-native-paper";



export default function Registerscreen({navigation}){

const {register,Error, isloading}= useContext(Authenticationcontex)
 const [Password,setPassword]=useState("")
 const [Email,setEmail]=useState("")
 const [Repeatedpassword,setrepeatedpassword]=useState("")

                return(
                        <Imagebackground>
                        <Imagecover/>
                        <Title>Easy Meal</Title>
                        <Imagecontainer>
                        <Input label="Email" value={Email}
                         textContentType="emailadress"
                         keyboardType="email-adress"
                         autoCapitalize="none"
                         autoComplete="email"
                        onChangeText={text =>setEmail(text)}
                        />
                        <Input label="Password" value={Password}
                        onChangeText={text=>setPassword(text)}
                        textContentType="password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        />
                        <Input label="Repeatpassword" value={Repeatedpassword}
                        onChangeText={text=>setrepeatedpassword(text)}
                        textContentType="password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        />
                        <Errorcontainer> {Error}</Errorcontainer>
                        {!isloading?(
                        <Authenticationbutton icon="account" mode="contained"
                        onPress={()=>register(Email,Password,Repeatedpassword)}>
                            Create Account
                        </Authenticationbutton>):(<ActivityIndicator animating={true} color="blue"/>)}
                        </Imagecontainer>
                        <Authenticationbutton mode="contained" onPress={()=>navigation.goBack()}>
                            GO BAck
                        </Authenticationbutton>
                        </Imagebackground>
                   )
                }
                