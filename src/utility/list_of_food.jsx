
import { List} from "react-native-paper";
import styled from "styled-components/native";
import { AreaView } from "./saveareaview";

const Listoffood= ({breakfastexpanded,setbreakfastexpanded, luncexpanded, 
                    setlunchexpanded,  dineerexpanded, setdinnerexpanded,
                    drinkexpanded,setdrinkexpanded }) => {

  return (
    <Scroll>
      <List.Accordion
        title="Breakfast"
        left={props => <List.Icon {...props} icon="rice" />}
        expanded={breakfastexpanded}
        onPress={()=>setbreakfastexpanded(!breakfastexpanded)}
        >
        <List.Item title="Bread and Tea" />
        <List.Item title="chicken and chips" />
        <List.Item title="pounded_yam and meat" />
      </List.Accordion>

      <List.Accordion
        title="Lunch"
        left={props => <List.Icon {...props} icon="hamburger" />}
        expanded={luncexpanded}
        onPress={()=>setlunchexpanded(!luncexpanded)}>
        <List.Item title="fried rice and chicken" />
        <List.Item title="coconut rice and meat" />
      </List.Accordion>
        <List.Accordion
        title="dinner"
        left={props => <List.Icon {...props} icon="pizza" />}
        expanded={dineerexpanded}
        onPress={()=>setdinnerexpanded(!dineerexpanded)}
        >
        <List.Item title=" salad and fish" />
        <List.Item title="sharwaman and pizza" />
        <List.Item title="semovita and meat" />
      </List.Accordion>

      <List.Accordion
        title="drink"
        left={props => <List.Icon {...props} icon="coffee" />}
        expanded={drinkexpanded}
        onPress={()=>(setdrinkexpanded(!drinkexpanded))}>
        <List.Item title="cocacola" />
        <List.Item title="fanta"/>
         <List.Item title="farouz"/>
        </List.Accordion>
     </Scroll>
   
  );
};

export default Listoffood;

const Scroll=styled.ScrollView`
margin-top:300px;
`