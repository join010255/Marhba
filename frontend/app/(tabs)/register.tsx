import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import Input from "@/Components/Input";
import { router } from "expo-router";
import Api from "../../service/User/api"

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};

    if (!firstName.trim() || firstName.trim().length < 3) {
      errs.firstName = "First name must be at least 3 characters.";
    }

    if (!lastName.trim() || lastName.trim().length < 3) {
      errs.lastName = "Last name must be at least 3 characters.";
    }

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

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  const handleRegister = async() => {
    if (!validate()) return;

    const allData = {
  firstName,
  lastName,
  email,
  password,
};
    console.log(allData)
    try {
  const res = await Api.register(allData);
  console.log("SUCCESS:", res);
} catch (err) {
  console.log("MESSAGE:", err.message);
  console.log("CODE:", err.code);
  console.log("RESPONSE:", err.response);
}
    router.push("/(tabs)/login")
    // Create account here
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={styles.container}
        edges={["top", "bottom", "left", "right"]}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/marhba_logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join our community today</Text>
        </View>

        <Input
          label="First Name"
          icon="user"
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={(text) => {
            setFirstName(text);
            setErrors({ ...errors, firstName: "" });
          }}
          returnKeyType="next"
          onSubmitEditing={() => lastNameRef.current?.focus()}
        />
        {errors.firstName ? (
          <Text style={styles.error}>{errors.firstName}</Text>
        ) : null}

        <Input
          ref={lastNameRef}
          label="Last Name"
          icon="user"
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={(text) => {
            setLastName(text);
            setErrors({ ...errors, lastName: "" });
          }}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current?.focus()}
        />
        {errors.lastName ? (
          <Text style={styles.error}>{errors.lastName}</Text>
        ) : null}

        <Input
          ref={emailRef}
          label="Email Address"
          icon="mail"
          placeholder="Enter your email"
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => {
            setEmail(text);
            setErrors({ ...errors, email: "" });
          }}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        {errors.email ? (
          <Text style={styles.error}>{errors.email}</Text>
        ) : null}

        <Input
          ref={passwordRef}
          label="Password"
          icon="lock"
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setErrors({ ...errors, password: "" });
          }}
          returnKeyType="done"
        />
        {errors.password ? (
          <Text style={styles.error}>{errors.password}</Text>
        ) : null}

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {handleRegister()}}
        >
          <Text style={styles.buttonText}>Create Account</Text>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>

         <View style={{paddingTop : 50, flexDirection: "row", alignItems: "center", justifyContent : "center"}}>
        <Text>
            Already have an account? {" "}
        </Text>
        <TouchableOpacity onPress={() => {router.push("/login")}}>
            <Text style={{color: "#7ed883ff"}}>
            Login
            </Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151b15",
    paddingHorizontal: 20,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },

  titleContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },

  title: {
    fontSize: 35,
    fontFamily: "Inter_700Bold",
    color: "#fff",
  },

  subtitle: {
    color: "#B0B0B0",
    marginTop: 10,
  },

  error: {
    color: "red",
    fontSize: 12,
    marginTop: 1,
    marginBottom: 8,
    marginLeft: 5,
  },

  loginButton: {
    backgroundColor: "#2E7D32",
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  buttonText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
  },
});

  export default Register;