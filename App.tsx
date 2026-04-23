import MainApp from "@/MainApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lemon: require("./assets/fonts/LEMONMILK-Medium.otf"),
    Roboto: require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    Spicy: require("./assets/fonts/Spicy-Sale.ttf")
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <QueryClientProvider client={queryClient}>
      <MainApp />
    </QueryClientProvider>
  );
}
