import { Text } from "@/components/common";
import { useSignInWithGoogle } from "@/hooks/auth";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { TouchableOpacity, View } from "react-native";

const LoginButtons = () => {
  const { mutateAsync, data } = useSignInWithGoogle();

  return (
    <View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#F0735A",
            paddingVertical: 16,
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#F0735A",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.35,
            shadowRadius: 10,
            elevation: 6
          }}
          activeOpacity={0.75}
        >
          <Text
            style={{
              fontFamily: "Lemon",
              fontSize: 16,
              color: "#fff",
              letterSpacing: 0.5
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 16,
          marginHorizontal: 36
        }}
      >
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#ccc"
          }}
        />

        <Text
          style={{
            marginHorizontal: 10,
            color: "#888",
            fontSize: 12
          }}
        >
          OR
        </Text>

        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#ccc"
          }}
        />
      </View>
      <View>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={mutateAsync}
        />
      </View>
    </View>
  );
};

export default LoginButtons;
