import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { TNavigationProps } from "../Routes";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import BaseInput from "../shared/components/baseInput";

export default function HomeScreen() {
  const navigation = useNavigation<TNavigationProps>();

  return (
    <>
      <Header />

      <View style={{ flex: 1 }}>
        <Button
          title={"detalhes"}
          onPress={() => navigation.navigate("details", { rate: 3 })}
        />
      </View>

      <Footer>
        <BaseInput
          label="Nome"
          asButton
          onPress={() => navigation.navigate("setUserName")}
        >
          <Text style={{ fontFamily: "bold" }}>Home</Text>
        </BaseInput>
      </Footer>
    </>
  );
}
