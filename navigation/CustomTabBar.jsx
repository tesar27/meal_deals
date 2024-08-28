import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
  Platform,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "@/screens/ProfileScreen";
import PastBookingsScreen from "@/screens/PastBookingsScreen";
const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "@/constants/Colors";
import { Link, Tabs } from "expo-router";
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from "react-native-maps";

function MapScreen() {
  const mapRef = useRef();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={Platform.OS == "ios" ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
        ref={mapRef}
      />
    </View>
  );
}

function ActiveBookingsScreen() {
  return (
    <View>
      <Text>Active Bookings Screen</Text>
    </View>
  );
}

function ActivateScreen() {
  return <View />;
}

// Custom Component for the Middle Button
function CustomTabBarButton({ children, onPress }) {
  return (
    <Pressable
      style={{
        top: -20,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 35,
          backgroundColor: "#FF6347", // Example color for the button
        }}
      >
        {children}
      </View>
    </Pressable>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Past Bookings") {
            iconName = focused ? "checklist" : "checklist";
          } else if (route.name === "Active Bookings") {
            iconName = focused
              ? "format-list-bulleted"
              : "format-list-bulleted";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Map") {
            iconName = focused ? "map" : "map";
          } else if (route.name === "Activate") {
            iconName = "qr-code";
            size = 30; // Larger size for the middle button icon
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black", // Color when the tab is selected
        tabBarInactiveTintColor: "gray", // Color when the tab is unselected
        tabBarStyle: {
          backgroundColor: "#FDFDFD", // Default background color for tab bar
        },
        // tabBarButton: (props) => (
        //   <CustomTabBarButton
        //     {...props}
        //     isFocused={props.accessibilityState.selected} // Pass the focused state
        //   />
        // ),
      })}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Past Bookings" component={PastBookingsScreen} />
      <Tab.Screen
        name="Activate"
        component={ActivateScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="qr-code" color="#FFF" size={45} />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen name="Active Bookings" component={ActiveBookingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
