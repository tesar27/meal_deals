import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import DealCard from "../components/DealCard";
import DealModal from "../components/DealModal";
import CreateDealButton from "../components/CreateDealButton";
import CreateDealModal from "../components/CreateDealModal";

const mockDeals = [
  {
    id: 1,
    title: "2+1 drink",
    description: "Buy 2 drinks, get 1 free",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    title: "2+1 Pizza",
    description: "Buy 2 pizzas, get 1 free",
    image: "https://via.placeholder.com/80",
  },
  // Add more mock data here
];

export default function ProfileScreen() {
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);

  const handleDealPress = (deal) => {
    setSelectedDeal(deal);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/restaurant-hero.jpg")}
        style={styles.heroImage}
      />
      <ScrollView style={styles.dealsContainer}>
        {mockDeals.map((deal) => (
          <DealCard
            key={deal.id}
            deal={deal}
            onPress={() => handleDealPress(deal)}
          />
        ))}
      </ScrollView>
      {selectedDeal && (
        <DealModal deal={selectedDeal} onClose={() => setSelectedDeal(null)} />
      )}
      <CreateDealButton onPress={() => setCreateModalVisible(true)} />
      {isCreateModalVisible && (
        <CreateDealModal onClose={() => setCreateModalVisible(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroImage: {
    width: "100%",
    height: 200,
  },
  dealsContainer: {
    flex: 1,
    padding: 16,
  },
});
