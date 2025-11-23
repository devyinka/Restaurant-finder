import { useContext } from "react"
import { Favouritecontex} from "../services/favourite/favourite"
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const Favourite=({Restaurant})=>{
    // const {favourites,Addfavourite,RemoveFavourite}=useContext(Favouritecontex);
//    const Isfavourite=favourites.find((r)=>r.id===Restaurant.id);
    return(
           <Favouritebutton>
        
            <AntDesign name="hearto" size={24} color="red"/>
           </Favouritebutton>
    )
}

const Favouritebutton=styled(TouchableOpacity)`
position:absolute;
top:25px;
right:25px;
z-index:9;
`;