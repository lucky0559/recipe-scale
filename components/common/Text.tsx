import React from "react";
import { Text as RNText, StyleProp, TextProps, TextStyle } from "react-native";

interface Props extends TextProps {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export const Text = ({ style, children, ...rest }: Props) => {
  return (
    <RNText {...rest} style={[{ fontFamily: "Roboto" }, style]}>
      {children}
    </RNText>
  );
};
