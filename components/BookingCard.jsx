import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BookingCard({ booking }) {
  return (
    <View style={styles.card}>
      <Text style={styles.userName}>{booking.userName}</Text>
      <Text style={styles.date}>{booking.date}</Text>
      {booking.review && <Text style={styles.review}>{booking.review}</Text>}
      {booking.deal && <Text style={styles.deal}>{booking.deal}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
    boxShadowColor: "#000",
    boxShadowOpacity: 0.2,
    boxShadowRadius: 4,
    elevation: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 16,
    color: "#888",
  },
  review: {
    fontSize: 16,
    marginTop: 8,
  },
  deal: {
    fontSize: 16,
    marginTop: 8,
  },
});
