import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

export default function CreateDealButton({ onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>+</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 16,
    bottom: 16,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    boxShadowColor: "#000",
    boxShadowOpacity: 0.2,
    boxShadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    fontSize: 36,
    color: "#fff",
    lineHeight: 36,
  },
});
