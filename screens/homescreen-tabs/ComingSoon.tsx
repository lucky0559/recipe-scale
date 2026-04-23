import LottieView from "lottie-react-native";
import styled from "styled-components/native";

const ComingSoon = () => {
  return (
    <ParentWrapper>
      <LottieView
        style={{ height: 320, width: 320 }}
        source={require("../../assets/lottiefiles/comingsoon.json")}
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
