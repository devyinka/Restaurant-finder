import Loginscreen from "../../features/Account/Accountscreen/loginscreen";
import Mainscreen from "../../features/Account/Accountscreen/Accountscreen";
import Registerscreen from "../../features/Account/Accountscreen/Registerscreen";
import { createStackNavigator } from "@react-navigation/stack";



const Account_navigation=()=>{
 const Stack=createStackNavigator();
 return(  
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown:false,}}>
        <Stack.Screen name="Main" component={Mainscreen}/>
        <Stack.Screen name="Login" component={Loginscreen}/>
        <Stack.Screen name="Register" component={Registerscreen}/>
    </Stack.Navigator>
)
}
export default Account_navigation;
