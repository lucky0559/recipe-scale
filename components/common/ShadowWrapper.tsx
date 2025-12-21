import { ReactNode } from "react";
import { View } from "react-native";

type ShadowWrapperProps = {
  children: ReactNode;
};

const ShadowWrapper = ({ children }: ShadowWrapperProps) => {
  return (
    <View
      style={{
        elevation: 8,
        backgroundColor: "#fff",
        borderRadius: 32,
        boxShadow: "2px 2px 10px black"
      }}
    >
      {children}
    </View>
  );
};

export default ShadowWrapper;
