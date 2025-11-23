import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef, useContext} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Authenticationcontex } from '../../../services/firebase/firebasecontextprovider';
import { getAuth } from 'firebase/auth';
import * as FileSystem from 'expo-file-system';

export default function Camerascreen({navigation}) {
  // const [facing, setFacing] = useState(CameraType>('back'));
  const {user}=useContext(Authenticationcontex)  
  const [facing, setFacing] = useState("<CameraType>('front')");
  const [permission, requestPermission] = useCameraPermissions();
   const User=getAuth().currentUser

     const cameraref=useRef(null);
  // const [uri, setUri] = useState<string | null>(null);

   const takePicture = async () => {
    if(cameraref){
    const photo=await cameraref.current.takePictureAsync();
     await AsyncStorage.setItem(`${User.uid}-photo`,JSON.stringify(photo));
      navigation.goBack()
   ;}

 };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>your permission is needed to  show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'front' ? 'back' : 'front'));
  }

 return (
    <View style={styles.container}>
      <CameraView  ref={(camera)=>cameraref.current=camera}  style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Change Camera</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.button}>
            <Text style={styles.text} onPress={takePicture}>Snap</Text>
          </TouchableOpacity>
        </View>  
         
      </CameraView>
    </View>)}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
   buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin:10,

  },
  button: {
  flex:1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor:"white",
    
  },
  text: {
    fontSize:20,
    fontWeight: 'bold',
    color: 'black',
  },
});
