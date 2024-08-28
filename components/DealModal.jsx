import React from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";

export default function DealModal({ deal, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <Text style={styles.title}>{deal.title}</Text>
        <Text style={styles.description}>{deal.description}</Text>
        <Text style={styles.stats}>People used: {deal.usedCount}</Text>
        <Text style={styles.stats}>Money earned: ${deal.earned}</Text>
        <Text style={styles.stats}>Views: {deal.views}</Text>
        <Button
          title="Edit Deal"
          onPress={() => {
            /* Handle edit deal */
          }}
        />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    boxShadowColor: "#000",
    boxShadowOffset: {
      width: 0,
      height: 2,
    },
    boxShadowOpacity: 0.25,
    boxShadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    marginVertical: 8,
  },
  stats: {
    fontSize: 16,
    marginVertical: 4,
  },
});
