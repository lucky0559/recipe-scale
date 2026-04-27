import { useLogout } from "@/hooks/auth";
import { useAuthStore } from "@/stores";
import { Notification } from "@/types";
import { groupNotifications, timeAgo } from "@/utils";
import { Bell, LogOutIcon } from "lucide-react-native";
import { Image, SectionList, Text, TouchableOpacity, View } from "react-native";
import Popover from "react-native-popover-view";
import { SafeAreaView } from "react-native-safe-area-context";

const notifMockData: Notification[] = [
  {
    _id: "2",
    from: "Lucky Angelo",
    link: "",
    createdAt: "2026-06-01T12:00:00Z",
    foodName: "Shawarma Rice",
    fromAvatar:
      "https://lh3.googleusercontent.com/a/ACg8ocKRWXhxm-WypNnfeJKMuW2p_wiFkc7BgXvwJOJz9lpi5XXaRhfb=s96-c",
    read: false
  },
  {
    _id: "1",
    from: "John Doe",
    link: "",
    createdAt: "2024-06-01T12:00:00Z",
    foodName: "Spaghetti Bolognese",
    fromAvatar:
      "https://lh3.googleusercontent.com/a/ACg8ocKRWXhxm-WypNnfeJKMuW2p_wiFkc7BgXvwJOJz9lpi5XXaRhfb=s96-c",
    read: true
  }
];

const TopBar = () => {
  const { mutateAsync } = useLogout();
  const setIsLogouting = useAuthStore(state => state.setIsLogouting);

  const handleLogout = () => {
    setIsLogouting(true);
    mutateAsync();
    setIsLogouting(false);
  };

  const groupedNotifications = groupNotifications(notifMockData);

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
        <Text style={{ fontSize: 26, fontFamily: "Spicy" }}>Recipe Scale</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 32
        }}
      >
        <Popover
          from={
            <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
              <Bell />
              {/* <BellDot color={'#FF9A86'} /> */}
            </TouchableOpacity>
          }
        >
          <View style={{ width: 350, maxWidth: 350 }}>
            <SectionList
              sections={groupedNotifications}
              keyExtractor={item => item._id.toString()}
              contentContainerStyle={{ padding: 16 }}
              stickySectionHeadersEnabled
              renderSectionHeader={({ section: { title } }) => (
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    marginTop: 10,
                    marginBottom: 8,
                    color: "#333"
                  }}
                >
                  {title}
                </Text>
              )}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: item.read ? "white" : "#FFF0BE",
                    padding: 14,
                    borderRadius: 12,
                    marginBottom: 10,
                    shadowColor: "#000",
                    shadowOpacity: 0.05,
                    shadowRadius: 6,
                    elevation: 2
                  }}
                >
                  <Image
                    source={{
                      uri: item.fromAvatar || "https://i.pravatar.cc/100"
                    }}
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 999,
                      marginRight: 12
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 14, color: "#333" }}>
                      <Text style={{ fontWeight: "600" }}>{item.from}</Text>{" "}
                      sent you a recipe for{" "}
                      <Text style={{ fontWeight: "600" }}>{item.foodName}</Text>
                    </Text>
                    <Text style={{ fontSize: 12, color: "#999", marginTop: 4 }}>
                      {timeAgo(item.createdAt)}
                    </Text>
                  </View>
                  {!item.read && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: "#FF3B30"
                      }}
                    />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </Popover>
        <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
          <LogOutIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TopBar;
