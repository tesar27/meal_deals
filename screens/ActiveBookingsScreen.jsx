import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import BookingCard from "../components/BookingCard";

const mockActiveBookings = [
  { id: 1, userName: "Alice Johnson", date: "2024-08-01", deal: "2+1 drink" },
  { id: 2, userName: "Bob Brown", date: "2024-08-02", deal: "2+1 Pizza" },
  // Add more mock data here
];

export default function ActiveBookingsScreen() {
  return (
    <ScrollView style={styles.container}>
      {mockActiveBookings.map((booking) => (
        <BookingCard key={booking.id} booking={booking} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
