import { Text } from "@/components/common";
import { AllRecipes } from "@/screens/homescreen-tabs";
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
        <Text style={{ fontSize: 50, fontFamily: "Spicy" }}>Recipe Scale</Text>
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
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#F0735A"
          }
        }}
      >
        <Tab.Screen
          name="AllRecipes"
          component={AllRecipes}
          options={{
            tabBarLabel: ({}) => (
              <Text style={{ fontFamily: "Lemon" }}>All Recipes</Text>
            )
          }}
        />
        <Tab.Screen
          name="Tab2"
          component={AllRecipes}
          options={{
            tabBarLabel: ({}) => (
              <Text style={{ fontFamily: "Lemon" }}>Favorite</Text>
            )
          }}
        />
        <Tab.Screen
          name="Tab3"
          component={AllRecipes}
          options={{
            tabBarLabel: ({}) => (
              <Text style={{ fontFamily: "Lemon" }}>Cost/Inventory</Text>
            )
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
