import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type SafeAreaWrapperProps = {
  children: ReactNode;
};

const SafeAreaWrapper = ({ children }: SafeAreaWrapperProps) => {
  return (
    <SafeAreaView style={{ paddingTop: 24, flex: 1, backgroundColor: "white" }}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaWrapper;
