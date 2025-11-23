import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Restaurantscreen from "../../features/Restauranthomepage/screens/Restuaranthomepagescreen";
import Restauarantdetailscreen from "../../features/Restauranthomepage/screens/Restaurantdetailscreen";

const Tab=createStackNavigator();

const RestaurantNavigator=()=>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false, ...TransitionPresets.ModalPresentationIOS}}>
            <Tab.Screen name="Restaurant2" component={Restaurantscreen}/>
            <Tab.Screen name="Detail" component={Restauarantdetailscreen}/>
        </Tab.Navigator>
    )
}

export default RestaurantNavigator;