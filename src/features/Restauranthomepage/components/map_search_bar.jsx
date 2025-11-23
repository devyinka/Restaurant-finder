import { Searchbar } from "react-native-paper";
import { createlocationcontex } from "../../../services/location/locationcontext";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";


const MapSearchBar = () => {
  const {keyword,Search}=useContext(createlocationcontex)
  const [search, setSearch] =useState(keyword);
  useEffect(()=>{Search(search)},[keyword]);

  return (
    <View style={styles.search}>
      <Searchbar
      placeholder="Search for the Location"
      onChangeText={(text)=>{
      setSearch(text)}}
      value={search}
      onSubmitEditing={()=>{
      Search(search);
      }}

      />
    </View>
   
  );
};

const styles=StyleSheet.create({
   search:{padding:10,
           backgroundColor:"white"}})

export default MapSearchBar;