import { Text, View, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useRef, useEffect } from "react";
import Input from "../../Components/Input";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import LoadingScreen from "./loadingScreen"
import Api from "../../service/User/api";
import useUserData from "../../store/userDataStore"

// import Login




export default function Index() {
  const setUserData = useUserData((state) => state.setUserData);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [errs, setErorr] = useState({});
  const [apiError, setApiError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function checkUserIsLogin(){
      try{
        const me = await Api.getMe();
        // console.log(me)
        if(!me){
          setLoading(true)
          router.replace("/login")
         
        }else{
          setUserData(me.message)
          setLoading(true)
          console.log(setUserData)
          router.replace("/profile")
          
        }
      }catch(error){
        // router.replace("/login")
        setLoading(true)
        // console.log(error, "lanono")
      }
    };
    checkUserIsLogin()
  }, [])

  if(!loading){
    return <LoadingScreen/>
  }
  
  const  validates = () => {
      const errs = {}
      if (!email.trim()) {
        errs.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errs.email = "Invalid email address.";
      }

      if (!password.trim()) {
        errs.password = "Password is required.";
      } else if (password.length < 8) {
        errs.password = "Password must be at least 8 characters.";
      }
      setErorr(errs);

      return Object.keys(errs).length === 0;
  }

  const apiConn = async() => {
    try {
      await Api.login({
        email,
        password,
      });
      return true
    } catch (err) {
      setApiError(true)
      return false
    }
  }
  const handelInput = async() => {
    // console.log('labobo')
    if(!validates()){
      return
    }
    console.log('test')
    const secess = await apiConn();
    if(secess){
      router.replace("/(tabs)/profile")
    }
  }
  
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
              onChangeText={(text) => {setEmail(text)
                setErorr({ ...errs, email: "" });}
              }
              keyboardType="email-address"
              onSubmitEditing={() => passwordRef.current?.focus()}
              returnKeyType="next" 
            />
            {errs.email ? (
                <Text style={styles.error}>{errs.email}</Text>
            ) : null}

          <Input
            ref={passwordRef}
            label="Password"
            icon="lock"
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            returnKeyType="done"
            onChangeText={(text) => {
              setPassword(text);
              setErorr({...errs, password : ""})
            }}
          />
           {errs?.password ? (
                <Text style={styles.error}>{errs.password}</Text>
            ) : apiError ? (
              // (Alert.alert("Error zjerigbg"))
              <Text style={styles.error}>email or password is false</Text>
            ): null}

          <TouchableOpacity style={styles.loginButton} onPress={() => handelInput()}>
          
            <Text style={{fontSize : 25, color : "white"}}>
              Login 
            </Text>
            <Ionicons style={{color : "white"}} name="arrow-forward" size={24} color="black" />
          </TouchableOpacity>
          
        </View>
        <View style={{paddingTop : 250, flexDirection: "row", alignItems: "center", justifyContent : "center"}}>
          <Text style={{color : "white"}}>
              Dont have an account? {" "}
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
  },

  error: {
    color: "red",
    fontSize: 12,
    marginTop: 1,
    marginBottom: 8,
    marginLeft: 5,
  },
})