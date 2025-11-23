import { NavigationContainer } from "@react-navigation/native";
import { Appnavigator } from "./App_Navigator";
import { useContext } from "react";
import { Authenticationcontex} from "../../services/firebase/firebasecontextprovider";
import Account_navigation from "./Account_navigation";

export default function Navigation(){
const {Isautheticated}=useContext(Authenticationcontex)
// let Isautheticated=true;
 return (
        Isautheticated ?(
            <NavigationContainer>
            <Appnavigator/> 
            </NavigationContainer>) :
            (<NavigationContainer>
             <Account_navigation/>
            </NavigationContainer>)
        )

}
 

