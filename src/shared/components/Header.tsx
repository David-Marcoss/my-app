import { Text } from "@react-navigation/elements";
import { Button, StyleSheet, View } from "react-native";
import { theme } from "../Theme/Theme";

interface IHeaderProps {
  name?: string;
}
export default function Header({ name }: IHeaderProps) {
  return (
    <View style={style.viewContainer}>
      <Text>{"Olá,"}</Text>
      <Text style={style.textName}>{name ? name : "Seu nome é?"}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  viewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    margin: 16,
    fontSize: theme.fonts.sizes.title,
    fontFamily: theme.fonts.family.regularItalic,
  },
  textName: {
    fontFamily: theme.fonts.family.bold,
    color: theme.colors.primary,
  },
});
