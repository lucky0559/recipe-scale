import { Text, TopBar } from "@/components/common";
import { AllFoods, ComingSoon } from "@/screens/homescreen-tabs";
import { useAuthStore } from "@/stores";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)", // better visible transparency
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    elevation: 10 // 🔥 important for Android
  }
});

const HomeScreen = () => {
  const isLogouting = useAuthStore(state => state.isLogouting);

  return (
    <View style={{ flex: 1, paddingHorizontal: 24 }}>
      <TopBar />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: "#F5ECEA"
          },
          tabBarLabelStyle: {
            fontSize: 14,
            textTransform: "none",
            letterSpacing: 0.3
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#F0735A",
            height: 2.5,
            borderRadius: 2
          },
          tabBarActiveTintColor: "#F0735A",
          tabBarInactiveTintColor: "#B0938A"
        }}
      >
        <Tab.Screen
          name="AllRecipes"
          component={AllFoods}
          options={{
            tabBarLabel: ({}) => (
              <Text style={{ fontFamily: "Lemon" }}>Foods</Text>
            )
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={ComingSoon}
          options={{
            tabBarLabel: ({}) => (
              <Text style={{ fontFamily: "Lemon" }}>Favorites</Text>
            )
          }}
        />
        <Tab.Screen
          name="ConstInventory"
          component={ComingSoon}
          options={{
            tabBarLabel: ({}) => (
              <Text style={{ fontFamily: "Lemon", textAlign: "center" }}>
                Cost/Inventory
              </Text>
            )
          }}
        />
      </Tab.Navigator>
      {isLogouting && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#F0735A" />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
