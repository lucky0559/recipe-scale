import { Text } from "@/components/common";
import { Tab1 } from "@/screens/homescreen-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{ paddingVertical: 24, flex: 1, backgroundColor: "white" }}
    >
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 50, fontFamily: "Spicy-Sale" }}>
          Recipe Scale
        </Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0
          },
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 16
          }
        }}
      >
        <Tab.Screen
          name="Tab1"
          component={Tab1}
          options={{
            tabBarLabel: ({}) => (
              <Text style={{ fontFamily: "Lemon-Milk-Medium" }}>
                All Recipes
              </Text>
            )
          }}
        />
        <Tab.Screen
          name="Tab2"
          component={Tab1}
          options={{
            tabBarLabel: ({}) => (
              <Text style={{ fontFamily: "Lemon-Milk-Medium" }}>Favorite</Text>
            )
          }}
        />
        <Tab.Screen
          name="Tab3"
          component={Tab1}
          options={{
            tabBarLabel: ({}) => (
              <Text style={{ fontFamily: "Lemon-Milk-Medium" }}>
                Cost/Inventory
              </Text>
            )
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
