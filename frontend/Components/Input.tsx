import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

interface InputProps extends TextInputProps {
  label: string;
  icon: keyof typeof Feather.glyphMap;
}

export default function Input({
  label,
  icon,
  ...props
}: InputProps) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{
          color: "#D7D3A5",
          fontSize: 13,
          fontWeight: "700",
          marginBottom: 8,
          letterSpacing: 1,
        }}
      >
        {label}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#1E1F1E",
          borderRadius: 16,
          height: 60,
          paddingHorizontal: 18,
          borderWidth: 1,
          borderColor: "#2D2E2D",
        }}
      >
        <Feather
          name={icon}
          size={22}
          color="#D7D3A5"
        />

        <TextInput
          {...props}
          autoCapitalize="none"
          placeholderTextColor="#666"
          style={{
            flex: 1,
            marginLeft: 14,
            color: "#fff",
            fontSize: 18,
          }}
        />
      </View>
    </View>
  );
}