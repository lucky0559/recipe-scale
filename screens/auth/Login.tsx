import { LoginButtons } from "@/components/auth";
import { Text } from "@/components/common";
import { shadow } from "@/utils/styles";
import { Eye, EyeClosed } from "lucide-react-native";
import { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ImageBackground
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flex: 1
        }}
        source={require("@/assets/images/auth-bg.png")}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 42
          }}
        >
          <Text
            style={{
              fontSize: 28,
              marginBottom: 6,
              fontFamily: "Lemon"
            }}
          >
            Login
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "200",
              fontFamily: "Lemon"
            }}
          >
            Please Login to continue
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 24,
            marginHorizontal: 20,
            borderRadius: 8,
            marginTop: 32,
            gap: 16,
            ...shadow
          }}
        >
          <View>
            <Text style={{ marginBottom: 4 }}>Username</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 8,
                borderRadius: 4
              }}
            />
          </View>
          <View>
            <Text style={{ marginBottom: 4 }}>Password</Text>
            <View style={{ position: "relative" }}>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 8,
                  borderRadius: 4,
                  paddingRight: 50
                }}
                secureTextEntry={!showPassword}
              />

              <TouchableOpacity
                onPress={() => setShowPassword(prev => !prev)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: [{ translateY: -12 }]
                }}
              >
                <Text>{showPassword ? <Eye /> : <EyeClosed />}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: 16
            }}
          >
            <TouchableOpacity>
              <Text style={{ opacity: 0.5 }}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <LoginButtons />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Login;
