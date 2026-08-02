import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { router } from "expo-router";


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <MaterialCommunityIcons
              name="shield-check"
              size={28}
              color="#4ADE80"
            />
            <Text style={styles.logo}>Marhba</Text>
          </View>

          <View style={styles.headerIcons}>
            <Ionicons
              name="settings-outline"
              size={24}
              color="#fff"
            />

            <View style={styles.avatar}>
              <Feather
                name="user"
                size={18}
                color="#fff"
              />
            </View>
          </View>
        </View>

        {/* Welcome Card */}
        <View style={styles.card}>
          <Text style={styles.title}>
            Marhba, Alex 👋
          </Text>

          <Text style={styles.description}>
            Welcome back to your secure workspace.
            Everything is updated and encrypted.
          </Text>
        </View>

        {/* Account Details */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={22}
              color="#4ADE80"
            />

            <Text style={styles.sectionTitle}>
              Account Details
            </Text>
          </View>

          <Text style={styles.label}>
            PRIMARY EMAIL
          </Text>

          <Text style={styles.value}>
            alex.jordan@marhba.tech
          </Text>

          <Text style={[styles.label, { marginTop: 20 }]}>
            MEMBER SINCE
          </Text>

          <Text style={styles.value}>
            January 2024
          </Text>
        </View>

        {/* Security */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={22}
              color="#4ADE80"
            />

            <Text style={styles.sectionTitle}>
              Security Status
            </Text>
          </View>

          <View style={styles.statusBox}>
            <MaterialCommunityIcons
              name="check-circle"
              size={18}
              color="#4ADE80"
            />

            <Text style={styles.statusText}>
              Fully Protected
            </Text>
          </View>

          <Text style={styles.footer}>
            Last scan performed 12 minutes ago.
            All systems operational.
          </Text>
        </View>
        <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.replace("/(tabs)/login")}
        >
            <Text style={styles.buttonText}>Create Account</Text>
            <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 18,
    paddingTop: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
   buttonText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    color: "#4ADE80",
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 8,
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

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#2B2B2B",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },

  card: {
    backgroundColor: "#1C1C1C",
    borderRadius: 14,
    padding: 18,
    marginBottom: 18,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },

  description: {
    color: "#BDBDBD",
    fontSize: 15,
    lineHeight: 22,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 8,
  },

  label: {
    color: "#888",
    fontSize: 11,
    fontWeight: "700",
    marginBottom: 5,
  },

  value: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  statusBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#23402B",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 18,
  },

  statusText: {
    color: "#4ADE80",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },

  footer: {
    color: "#9E9E9E",
    fontSize: 14,
    lineHeight: 20,
  },
});