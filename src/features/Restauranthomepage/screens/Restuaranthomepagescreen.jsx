import {FlatList, TouchableOpacity, View} from 'react-native'
import Search from '../components/searchbar';
import Restaurantinfo from '../components/Restuarantinfocard';
import { AreaView } from '../../../utility/saveareaview';
import { useContext } from 'react';
import { Restaurantcontext } from '../../../services/Restaurant/Restaurantcontentx';
import { ActivityIndicator} from 'react-native';


export default function Restaurantscreen({navigation}){

const {restaurant,isloading, error}=useContext(Restaurantcontext);

  return(
     <AreaView>
         <View style={{position:'absolute', marginTop: "50%",left:"50%"}}>
           {isloading?<ActivityIndicator animating={true} style={{marginLeft:-25}} size="small"/>:null}
        </View>
     <Search/>
        <FlatList
        data={restaurant}
        renderItem={({item})=>( 
        <TouchableOpacity
        onPress={()=>navigation.navigate("Detail",{Info:item})}
        >
          <Restaurantinfo Info={item}/>
        </TouchableOpacity>)}
        keyExtractor={item=>item.place_id||item.id}
        contentContainerStyle={{padding:16}}/> 
    </AreaView>
    )
} 

// const AreaView=styled.SafeAreaView`
// flex: 1;
// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}`;

// const styles = StyleSheet.create({
//   container:{flex:1, 
//               marginTop: StatusBar.currentHeight},
// });