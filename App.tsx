import { SafeAreaWrapper } from "@/components/common";
import { FoodDetails, HomeScreen } from "@/screens";
import { RootStackParamList } from "@/types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator<RootStackParamList>();

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
      <Stack.Screen name="FoodDetails" component={FoodDetails} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Lemon: require("./assets/fonts/LEMONMILK-Medium.otf"),
    Roboto: require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    Spicy: require("./assets/fonts/Spicy-Sale.ttf")
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <SafeAreaWrapper>
        <RootStack />
      </SafeAreaWrapper>
    </NavigationContainer>
  );
}
