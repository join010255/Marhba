import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRef } from "react";
import Input from "@/Components/Input";
import Ionicons from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";
import {TouchableWithoutFeedback, Keyboard,} from "react-native";
// import { Controller, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/hookForm/resolvers";





export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null);
  
  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{backgroundColor : "#151b15", flex : 1}} edges={["top", "bottom", "left", "right"]} >
        <View style={{justifyContent : "center", alignItems : "center", marginTop : 20}}>
          <Image
            source={require("@/assets/images/marhba_logo.png")}
            style ={styles.imageCogo}
          />
        </View>
        <View style={{justifyContent : "center", alignItems : "center", marginTop : 50, }}>
          <Text style={{fontSize : 35, fontFamily: "Inter_700Bold", color : "#ffff"}}>Welcom Back</Text>
          <Text style={{color : "#B0B0B0", marginTop : 10}} >Sign in to continue</Text>
        </View>

      
        
    
        <View style={{marginTop : 20, paddingHorizontal : 20}}>
            <Input
              label="Email Address"
              icon="mail"
              placeholder="Username, email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              onSubmitEditing={() => passwordRef.current?.focus()}
              returnKeyType="next"
              
          />
          <Input
            ref={passwordRef}
            label="Password"
            icon="lock"
            secureTextEntry={true}
            placeholder="*********"
            value={password}
            returnKeyType="done"
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.loginButton}>
          
            <Text style={{fontSize : 25}}>
              Login 
            </Text>
            <Ionicons name="arrow-forward" size={24} color="black" />
          </TouchableOpacity>
          
        </View>
        <View style={{paddingTop : 250, flexDirection: "row", alignItems: "center", justifyContent : "center"}}>
          <Text>
              Don't have an account? {" "}
          </Text>
          <TouchableOpacity onPress={() => {router.push("/register");}}>
            <Text style={{color: "#7ed883ff"}}>
              Register
            </Text>
          </TouchableOpacity>
        </View>

        
      </SafeAreaView>
    </TouchableWithoutFeedback>
    
   
  );
}

const styles = StyleSheet.create({
  imageCogo : {
    width : 100,
    height : 100,
    borderRadius : 20
  },
  loginButton : {
    backgroundColor : "#2E7D32",
    top: "25%",
    paddingVertical: 15,
    borderRadius: 8,
    width: "100%", shadowColor: "#000",
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 3.0,
    shadowRadius: 4,
    elevation: 100,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems : "center"
  }
})