import { ReactNode } from "react";
import { SafeAreaView, StyleProp, ViewStyle } from "react-native";

type SafeAreaWrapperProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const SafeAreaWrapper = ({ children, style }: SafeAreaWrapperProps) => {
  return (
    <SafeAreaView
      style={[{ paddingTop: 24, flex: 1, backgroundColor: "white" }, style]}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaWrapper;
