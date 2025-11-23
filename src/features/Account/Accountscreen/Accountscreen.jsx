
import LottieView from "lottie-react-native";
import { AnimationWrapper, Authenticationbutton, 
         Imagebackground, 
         Imagecontainer, 
         Imagecover, 
         Title } from "../Accountcomponent/Account.background";
import { useEffect, useRef } from "react";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";

const Mainscreen=({navigation})=>{
return(
        <Imagebackground>
            <Imagecover/>
            <Title> Easy Meal </Title>
            <Imagecontainer>
              <Authenticationbutton icon="account-lock-open" mode="contained" onPress={()=>navigation.navigate("Login")}>
               Login
              </Authenticationbutton>
             <Authenticationbutton icon="mail" mode="contained" 
             onPress={()=>(navigation.navigate("Register"))}>
                Register
             </Authenticationbutton>
            </Imagecontainer>
        </Imagebackground >
    )
}
export default Mainscreen;