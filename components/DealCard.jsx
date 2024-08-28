import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function DealCard({ deal, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image source={{ uri: deal.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{deal.title}</Text>
        <Text style={styles.description}>{deal.description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
    boxShadowColor: "#000",
    boxShadowOpacity: 0.2,
    boxShadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#888",
    marginTop: 8,
  },
});
