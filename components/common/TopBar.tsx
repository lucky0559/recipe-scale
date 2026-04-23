import { useLogout } from "@/hooks/auth";
import { useAuthStore } from "@/stores";
import { LogOutIcon } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TopBar = () => {
  const { mutateAsync } = useLogout();
  const setIsLogouting = useAuthStore(state => state.setIsLogouting);

  const handleLogout = () => {
    setIsLogouting(true);
    mutateAsync();
    setIsLogouting(false);
  };

  return (
    <SafeAreaView
      style={{
        marginVertical: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <View>
        <Text style={{ fontSize: 36, fontFamily: "Spicy" }}>Recipe Scale</Text>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
          <LogOutIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TopBar;
