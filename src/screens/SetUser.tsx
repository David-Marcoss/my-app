import { Text } from "@react-navigation/elements";
import {} from "@react-navigation/native";
import { StyleSheet, TextInput, View } from "react-native";

import BaseInput from "../shared/components/baseInput";
import { theme } from "../shared/Theme/Theme";

export default function SetUserScreen() {
  return (
    <View style={style.viewContainer}>
      <Text style={style.text}>Qual é o seu nome?</Text>
      <BaseInput label="Nome">
        <TextInput
          style={style.textInput}
          placeholder="Digite aqui o seu nome..."
          placeholderTextColor={theme.colors.textPlaceholder}
        />
      </BaseInput>
    </View>
  );
}

const style = StyleSheet.create({
  viewContainer: {
    flexDirection: "column",
    gap: 4,
  },
  text: {
    textAlign: "center",
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.text,
  },
  textInput: {
    padding: 8,
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
  },
});
