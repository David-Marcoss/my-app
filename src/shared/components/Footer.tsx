import { Text } from "@react-navigation/elements";
import { Button, StyleSheet, View } from "react-native";
import { theme } from "../Theme/Theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IHeaderProps {
  children: React.ReactNode;
}
export default function Footer({ children }: IHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...style.viewContainer, paddingBottom: insets.bottom + 16 }}>
      {children}
    </View>
  );
}

const style = StyleSheet.create({
  viewContainer: {
    padding: 16,
    borderTopEndRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: theme.colors.paper,
    ...theme.shadows.default,
  },
});
