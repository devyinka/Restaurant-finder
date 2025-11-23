
import Restaurantinfo from "../components/Restuarantinfocard"
import { AreaView } from "../../../utility/saveareaview"
import Listoffood from "../../../utility/list_of_food"
import { useState } from "react"
export default function Restauarantdetailscreen({route}){
    const {Info}=route.params
    const [breakfastexpanded, setbreakfastexpanded]=useState(false)
    const [luncexpanded, setlunchexpanded]=useState(false)
    const [dineerexpanded, setdinnerexpanded]=useState(false)
    const [drinkexpanded, setdrinkexpanded]=useState(false)
return(
 <AreaView>
 <Restaurantinfo  Info={Info}/>
 <Listoffood breakfastexpanded={breakfastexpanded} setbreakfastexpanded={setbreakfastexpanded} 
             luncexpanded={ luncexpanded} setlunchexpanded={setlunchexpanded}   
             dineerexpanded={dineerexpanded} setdinnerexpanded={setdinnerexpanded}
             drinkexpanded={drinkexpanded} setdrinkexpanded={setdrinkexpanded} />        
 </AreaView>
)
}
