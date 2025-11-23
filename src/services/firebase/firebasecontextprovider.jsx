
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { getFirebaseErrorMessage } from "./firebaseerrormessage";

export const  Authenticationcontex=createContext();

export const AutheticationProvider=({children})=>{
    const [user, setuser]=useState("")
    const [isloading,setisloading]=useState(false);
    const [Error, seterror]=useState("");

    const Onlogin= async (Email, password)=>{
    setisloading(true);
    try{
     const credential= await signInWithEmailAndPassword(auth, Email, password)
        setuser(credential)
        setisloading(false)
     }catch(err){
        const message=getFirebaseErrorMessage(err.code)
        seterror(message);
        setTimeout(() => seterror(null), 3000);
        setisloading(false)
    }

}
    const Onregister= async (Email,password,ReapeatedPassword)=>{
    if(password !==ReapeatedPassword){
        seterror("the password is not match");
        setTimeout(() => seterror(null), 3000);
        return; 
    }
    setisloading(true);
    try{
     const credential= await createUserWithEmailAndPassword(auth, Email, password)
        setuser(credential)
        setisloading(false)
     }catch(err){
        const message=getFirebaseErrorMessage(err.code)
        seterror(message)
        setTimeout(() =>seterror(null), 3000);
         setisloading(false)
    }
    }
    const Onsignout= ()=>{
    signOut(auth) 
    setuser(null)}

    return(
        <Authenticationcontex.Provider value={{ 
         register:Onregister,
         Isautheticated:!!user,
         user, isloading,
         Signout:Onsignout,
         login:Onlogin,
         Error}}>
                {children}
        </Authenticationcontex.Provider>
    )
}
