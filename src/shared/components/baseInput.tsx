import { Text } from "@react-navigation/elements";
import { Button, Pressable, StyleSheet, View } from "react-native";
import { theme } from "../Theme/Theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IHeaderProps {
  label: string;
  children: React.ReactNode;
  asButton?: boolean;
  onPress?: () => void;
}
export default function BaseInput({
  children,
  label,
  asButton,
  onPress,
}: IHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={style.viewContainer}>
      <Text style={style.label}>{label}</Text>
      {asButton ? (
        <Pressable
          style={({ pressed }) =>
            pressed ? style.inputPressed : style.inputContainer
          }
          onPress={onPress}
        >
          {children}
        </Pressable>
      ) : (
        <View style={style.inputContainer}>{children}</View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  viewContainer: {
    flexDirection: "column",
    gap: 4,
  },
  label: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.sizes.body,
    color: theme.colors.text,
  },

  inputContainer: {
    backgroundColor: theme.colors.background,
    borderRadius: 8,
  },

  inputPressed: {
    backgroundColor: theme.colors.background,
    borderRadius: 8,
    opacity: 0.5,
  },
});
