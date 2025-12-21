import { Text, TopBar } from "@/components/common";
import { AllRecipes, ComingSoon } from "@/screens/homescreen-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <>
      <TopBar />
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
          name="ComingSoon1"
          component={ComingSoon}
          options={{
            tabBarLabel: ({}) => (
              <Text style={{ fontFamily: "Lemon" }}>Favorite</Text>
            )
          }}
        />
        <Tab.Screen
          name="ComingSoon2"
          component={ComingSoon}
          options={{
            tabBarLabel: ({}) => (
              <Text style={{ fontFamily: "Lemon" }}>Cost/Inventory</Text>
            )
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default HomeScreen;
