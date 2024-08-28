import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import BookingCard from "../components/BookingCard";

const mockBookings = [
  {
    id: 1,
    userName: "John Doe",
    date: "2024-07-01",
    review: "Great experience!",
  },
  {
    id: 2,
    userName: "Jane Smith",
    date: "2024-07-02",
    review: "Lovely place!",
  },
  // Add more mock data here
];

export default function PastBookingsScreen() {
  return (
    <ScrollView style={styles.container}>
      {mockBookings.map((booking) => (
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
