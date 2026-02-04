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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontSize: theme.fonts.sizes.title,
    fontFamily: theme.fonts.family.regularItalic,
    backgroundColor: theme.colors.paper,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    ...theme.shadows.default,
  },
});
