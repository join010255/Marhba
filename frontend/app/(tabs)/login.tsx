import { Text, View, StyleSheet } from "react-native";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useRef } from "react";
import Input from "@/Components/Input";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const emailRef = useRef(null)
  const passwordRef = useRef(null);
  return (
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
          placeholder="name@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <Input

        label="Password"
        icon="lock"
        //  placeholder="Password"
        secureTextEntry={true}
        placeholder="*********"
        value={password}
        returnKeyType="done"
        onChangeText={setPassword}
        
      />
        
    </View>
      
    </SafeAreaView>
    
   
  );
}

const styles = StyleSheet.create({
  imageCogo : {
    width : 100,
    height : 100,
    borderRadius : 20
  }
})