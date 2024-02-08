import { Text as RawText } from "react-native";
import { useEffect } from "react";
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

export const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <RawText
      style={{ fontFamily: "Inter_400Regular", fontSize: 30 }}
      className={className}
    >
      {children}
    </RawText>
  );
};
