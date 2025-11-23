import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../../features/setting/setting_screen/settingscreen";
import Camerascreen from "../../features/setting/setting_screen/camera_screen";
const Setting=createStackNavigator();

export default  function ScreenNavigator(){
    return(
    <Setting.Navigator initialRouteName="setting" screenOptions={{cardStyleInterpolator:CardStyleInterpolators.forScaleFromCenterAndroid, headerShown:true}}>
        <Setting.Screen name="setting" component={SettingScreen}/>
        <Setting.Screen name="Camera"   component={Camerascreen}/>
    </Setting.Navigator>)
}