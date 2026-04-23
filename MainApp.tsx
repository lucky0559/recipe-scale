import { SafeAreaWrapper } from "@/components/common";
import { useGetCurrentUser } from "@/hooks/auth";
import { FoodDetails, HomeScreen } from "@/screens";
import Login from "@/screens/auth/Login";
import { useUserStore } from "@/stores";
import { useAuthStore } from "@/stores/AuthStore";
import { RootStackParamList } from "@/types";
import { getAccessToken } from "@/utils/authStorage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "white"
        }
      }}
    >
      <Stack.Screen name="HomeTabs" component={HomeScreen} />
      <Stack.Screen name="FoodDetails" component={FoodDetails} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "white"
        }
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="FoodDetails" component={FoodDetails} /> */}
    </Stack.Navigator>
  );
};

export default function MainApp() {
  useGetCurrentUser();
  const isLoading = useAuthStore(state => state.isLoading);

  const { setUser, user } = useUserStore(state => state);

  useEffect(() => {
    const init = async () => {
      const token = await getAccessToken();
      console.log("token: ", token);

      if (!token) {
        setUser(null);
        return;
      }
    };

    init();
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId:
        "574598878465-l5rpcipslai7rmhogpijn5dk6k3gi29b.apps.googleusercontent.com",
      webClientId:
        "574598878465-l5cajrtm82neubg7lacq0oscqpr9nn05.apps.googleusercontent.com",
      profileImageSize: 150,
      offlineAccess: true
    });
  }, []);

  if (isLoading) {
    return (
      <SafeAreaWrapper
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ActivityIndicator size="large" color="#FF9A86" />
      </SafeAreaWrapper>
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        <SafeAreaWrapper>
          <RootStack />
        </SafeAreaWrapper>
      ) : (
        <SafeAreaWrapper>
          <AuthStack />
        </SafeAreaWrapper>
      )}
    </NavigationContainer>
  );
}
