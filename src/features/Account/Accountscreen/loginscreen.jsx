import { useContext, useState } from "react";
import { Authenticationbutton, Errorcontainer, Imagebackground, Imagecontainer, Imagecover, Title } from "../Accountcomponent/Account.background";
import { Authenticationcontex } from "../../../services/firebase/firebasecontextprovider";
import { ActivityIndicator } from "react-native-paper";
import { Input } from "../Accountcomponent/input";

export default function Loginscreen({navigation}){

    const {login,Error,isloading}=useContext(Authenticationcontex)
    const [Email, setEmail]=useState("");
    const [Password, setPassword]=useState("");
    
    return(
    
        <Imagebackground>
        <Imagecover/>
        <Title>Easy Meal</Title>
        <Imagecontainer>
        <Input label="Email" value={Email}
         textContentType="emailAdress"
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
        <Errorcontainer> {Error}</Errorcontainer>

        {!isloading?
        (<Authenticationbutton icon="login" mode="contained"
        onPress={()=>login(Email,Password)}>
            Login
        </Authenticationbutton>):
        
        (<ActivityIndicator animating={true} color="blue"/>)}
        </Imagecontainer>
        <Authenticationbutton mode="contained" onPress={()=>navigation.goBack()}>
            GO BAck
        </Authenticationbutton>
        </Imagebackground>
    )
}
