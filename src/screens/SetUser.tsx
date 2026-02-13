import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, TextInput, View } from "react-native";
import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

import BaseInput from "../shared/components/baseInput";

import { theme } from "../shared/Theme/Theme";

import { TNavigationProps } from "../Routes";
import { Button } from "../shared/components/Button";

export default function SetUserScreen() {
  const [username, setUsername] = useState("");

  const navigation = useNavigation<TNavigationProps>();

  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={{ ...style.viewContainer, marginBottom: insets.bottom }}>
        <Text style={style.text}>Qual é o seu nome?</Text>
        <BaseInput label="Nome">
          <TextInput
            style={style.textInput}
            value={username}
            placeholder="Digite aqui o seu nome..."
            placeholderTextColor={theme.colors.textPlaceholder}
            onChangeText={(text) => setUsername(text)}
            // autoFocus
          />
        </BaseInput>

        <View style={{ flex: 1 }} />

        <Button
          title="Salvar"
          onPress={() => navigation.popTo("home", { newUsername: username })}
        />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  viewContainer: {
    gap: 4,
    flex: 1,
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
