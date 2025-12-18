import React from "react";
import { Text as RNText, StyleProp, TextProps, TextStyle } from "react-native";

interface Props extends TextProps {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const Text: React.FC<Props> = ({ style, children, ...rest }) => {
  return (
    <RNText {...rest} style={[{ fontFamily: "Roboto-Light" }, style]}>
      {children}
    </RNText>
  );
};

export default Text;
