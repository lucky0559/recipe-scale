import { LoadingLottie } from "@/assets/lottiefiles";
import LottieView from "lottie-react-native";
import { View } from "react-native";

const LoadingLottieView = () => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <LottieView
        style={{ height: 320, width: 320 }}
        source={LoadingLottie}
        autoPlay
        loop
      />
    </View>
  );
};

export default LoadingLottieView;
