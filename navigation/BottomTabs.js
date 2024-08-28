import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import PastBookingsScreen from "../screens/PastBookingsScreen";
import ActiveBookingsScreen from "../screens/ActiveBookingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let backgroundColor;
          if (route.name === "Past Bookings") {
            iconName = focused ? "checklist" : "checklist";
            backgroundColor = focused ? "#612F7A" : "#261A40";
          } else if (route.name === "Active Bookings") {
            iconName = focused
              ? "format-list-bulleted"
              : "format-list-bulleted";
            backgroundColor = focused ? "#612F7A" : "#261A40";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
            backgroundColor = focused ? "#612F7A" : "#261A40";
          }
          // You can return any component that you like here!
          return (
            <View
              style={{
                paddingHorizontal: 40,
                backgroundColor: focused ? "#612F7A" : "#261A40", // Background changes when focused
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <MaterialIcons name={iconName} size={size} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: "white", // Active icon color
        tabBarInactiveTintColor: "white", // Inactive icon color
        tabBarStyle: {
          backgroundColor: "#261A40",
          position: "absolute",
          elevation: 100,
        },
        headerShown: true, // Hide header for all tabs
      })}
    >
      <Tab.Screen
        options={{
          title: "Past Bookings",
        }}
        style={{ backgroundColor: "261A40" }}
        name="Past Bookings"
        component={PastBookingsScreen}
      />
      <Tab.Screen name="Active Bookings" component={ActiveBookingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
