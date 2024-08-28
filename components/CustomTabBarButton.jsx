import React from "react";
import { Dimensions, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const CustomTabBarButton = ({ children, onPress, isFocused }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: width / 3, // Adjust this if you need different widths
        backgroundColor: isFocused ? "#FF4500" : "#FDFDFD", // Custom background color
      }}
    >
      {children}
    </Pressable>
  );
};

export default CustomTabBarButton;
