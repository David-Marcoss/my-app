import { Text } from "@react-navigation/elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { TNavigationProps, TRouteProps } from "../Routes";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import BaseInput from "../shared/components/baseInput";
import { theme } from "../shared/Theme/Theme";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [username, setUsername] = useState("");

  const navigation = useNavigation<TNavigationProps>();

  const { params } = useRoute<TRouteProps<"home">>();

  useEffect(() => {
    if (params && params?.newUsername.trim()) {
      setUsername(params.newUsername);
    }
  }, [params?.newUsername]);

  return (
    <>
      <Header name={username} />

      <View style={{ flex: 1 }}>
        <Button
          title={"detalhes"}
          onPress={() => navigation.navigate("details", { rate: 3 })}
        />
      </View>

      <Footer>
        <View style={style.viewContainer}>
          <Text style={style.textFooter}>Qual é o seu nome?</Text>
          <BaseInput
            label="Nome"
            asButton
            onPress={() => navigation.navigate("setUserName")}
          >
            <TextInput
              editable={false}
              pointerEvents="none"
              style={style.TextInput}
              placeholder="Digite aqui o seu nome..."
              placeholderTextColor={theme.colors.textPlaceholder}
            />
          </BaseInput>
        </View>
      </Footer>
    </>
  );
}
const style = StyleSheet.create({
  viewContainer: {
    flexDirection: "column",
    gap: 4,
  },
  textFooter: {
    textAlign: "center",
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.text,
  },
  TextInput: {
    padding: 8,
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
  },
});
