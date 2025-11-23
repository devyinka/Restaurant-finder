import { StatusBar as Expostatusbar } from 'expo-status-bar';
import { useFonts as useoswald,Oswald_400Regular,Oswald_300Light,Oswald_600SemiBold,Oswald_200ExtraLight } from '@expo-google-fonts/oswald';
import { useFonts as uselato,Lato_400Regular,Lato_100Thin_Italic,Lato_300Light,Lato_700Bold } from '@expo-google-fonts/lato';
import { Restaurantprovider } from './src/services/Restaurant/Restaurantcontentx';
import { LocationContexProvider } from './src/services/location/locationcontext';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infastructure/theme/home';
import Navigation from './src/infastructure/Navigation';
import { AutheticationProvider } from './src/services/firebase/firebasecontextprovider';

export default function App() {
  const [oswaldloaded]=useoswald({Oswald_400Regular,Oswald_300Light,Oswald_600SemiBold,Oswald_200ExtraLight},)
  const [latoloaded]=uselato({Lato_400Regular,Lato_100Thin_Italic,Lato_300Light,Lato_700Bold},)
  if(!oswaldloaded||!latoloaded){
    return null;
  }
  return (
    <>
    <ThemeProvider theme={theme}>
    <AutheticationProvider>
    <LocationContexProvider>
    <Restaurantprovider>
    <Navigation/>
    </Restaurantprovider>
    </LocationContexProvider>
    </AutheticationProvider>
    </ThemeProvider>
    <Expostatusbar style="auto"/>
    </>
  );
}





// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
    
//     </Tab.Navigator>
//   );
// }

