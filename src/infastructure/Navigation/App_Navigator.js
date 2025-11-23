import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from '../../features/setting/setting_screen/settingscreen';
import { Ionicons } from '@expo/vector-icons';
import RestaurantNavigator from './Restaurant_Navigator';
import Mapscreen from '../../features/Restauranthomepage/screens/Mapscreen';
import ScreenNavigator from './setting_navigator';
 const Tab = createBottomTabNavigator();
 export const Appnavigator=()=>{
 return(
  <Tab.Navigator screenOptions={({ route }) => ({
       tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Restaurant") {
        iconName ="restaurant"
        } else if (route.name === "Settings") {
        iconName ="settings"
        }
        else if (route.name === "Map") {
        iconName ="map"
        }
        return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#006600",
        tabBarInactiveTintColor: "#8e8e93",
        })} >
    <Tab.Screen name="Restaurant" component={RestaurantNavigator} /> 
    <Tab.Screen name="Map" component={Mapscreen} />
    <Tab.Screen options={{headerShown:false}} name="Settings" component={ScreenNavigator} />
  </Tab.Navigator>)
}