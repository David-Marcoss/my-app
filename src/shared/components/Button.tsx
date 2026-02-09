import { Text } from "@react-navigation/elements";
import {} from "@react-navigation/native";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { theme } from "../Theme/Theme";

interface IButtonProps {
  text?: string;
  children?: React.ReactNode;
  onPress?: () => void;
}

export default function Button({ text, children, onPress }: IButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...style.buttonContainer,
        ...(pressed ? style.buttonPressed : {}),
      })}
      onPress={onPress}
    >
      {text ? <Text style={style.text}>{text}</Text> : children}
    </Pressable>
  );
}

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column",
    padding: 14,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  text: {
    textAlign: "center",
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.primaryText,
  },
});
