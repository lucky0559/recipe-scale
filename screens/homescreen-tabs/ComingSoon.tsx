import { ComingSoonLottie } from "@/assets/lottiefiles";
import LottieView from "lottie-react-native";
import styled from "styled-components/native";

const ComingSoon = () => {
  return (
    <ParentWrapper>
      <LottieView
        style={{ height: 500, width: 500, flex: 1 }}
        source={ComingSoonLottie}
        autoPlay
        loop
      />
    </ParentWrapper>
  );
};

export default ComingSoon;

const ParentWrapper = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
