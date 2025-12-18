import { HomeScreen } from "@/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingHorizontal: 24,
          backgroundColor: "white"
        }
      }}
    >
      <Stack.Screen name="HomeTabs" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lemon-Milk-Medium": require("./assets/fonts/LEMONMILK-Medium.otf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Spicy-Sale": require("./assets/fonts/Spicy-Sale.ttf")
  });

  if (!fontsLoaded) return <AppLoading />; // or null

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
