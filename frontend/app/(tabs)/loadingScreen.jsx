import { View, Image, Text, ActivityIndicator, StyleSheet } from "react-native";


export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/marhba_logo.png")} 
        style={styles.logo}
        resizeMode="contain"
      />

      <ActivityIndicator
        size="large"
        color="#6EEB83"
        style={styles.loader}
      />
      <View style={styles.footer}>
        <Text style={styles.text}>Welcome home.</Text>
        <Text style={styles.dots}>•••</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111313",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 70,
  },

  logo: {
    width: 95,
    height: 95,
    marginTop: 20,
  },

  loader: {
    marginTop: -120,
  },

  footer: {
    alignItems: "center",
  },

  text: {
    color: "#8C8C8C",
    fontSize: 13,
    marginBottom: 4,
  },

  dots: {
    color: "#6EEB83",
    fontSize: 18,
    letterSpacing: 3,
  },
});