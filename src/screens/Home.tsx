import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { TNavigationProps } from "../Routes";
import Header from "../shared/components/Header";

export default function HomeScreen() {
  const navigation = useNavigation<TNavigationProps>();

  return (
    <>
      <Header />

      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: "bold" }}>Homewd wqdwq</Text>

        <Button
          title={"detalhes"}
          onPress={() => navigation.navigate("details", { rate: 3 })}
        />
      </View>

      <Header />
    </>
  );
}
