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
              fontSize: 32,
              marginBottom: 8,
              fontFamily: "Lemon"
            }}
          >
            Login
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "300",
              fontFamily: "Lemon",
              opacity: 0.65
            }}
          >
            Welcome back — let's cook
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 28,
            marginHorizontal: 20,
            borderRadius: 20,
            marginTop: 32,
            gap: 18,
            ...shadow
          }}
        >
          <View>
            <Text style={{ marginBottom: 8, fontSize: 12, opacity: 0.55, letterSpacing: 0.6 }}>USERNAME</Text>
            <TextInput
              style={{
                borderWidth: 1.5,
                borderColor: "#EDD8D0",
                backgroundColor: "#FFFAF9",
                padding: 14,
                borderRadius: 12,
                fontSize: 15,
                color: "#2d2018"
              }}
            />
          </View>
          <View>
            <Text style={{ marginBottom: 8, fontSize: 12, opacity: 0.55, letterSpacing: 0.6 }}>PASSWORD</Text>
            <View style={{ position: "relative" }}>
              <TextInput
                style={{
                  borderWidth: 1.5,
                  borderColor: "#EDD8D0",
                  backgroundColor: "#FFFAF9",
                  padding: 14,
                  borderRadius: 12,
                  paddingRight: 50,
                  fontSize: 15,
                  color: "#2d2018"
                }}
                secureTextEntry={!showPassword}
              />

              <TouchableOpacity
                onPress={() => setShowPassword(prev => !prev)}
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: [{ translateY: -12 }]
                }}
              >
                <Text>{showPassword ? <Eye size={22} color="#C0603A" /> : <EyeClosed size={22} color="#C0603A" />}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: 4
            }}
          >
            <TouchableOpacity>
              <Text style={{ opacity: 0.45, fontSize: 13 }}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <LoginButtons />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Login;
