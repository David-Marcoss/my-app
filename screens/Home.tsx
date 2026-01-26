import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { TNavigationProps } from "../Routes";

export default function HomeScreen() {
  const navigation = useNavigation<TNavigationProps>();

  return (
    <View>
      <Text>Home</Text>

      <Button
        title={"detalhes"}
        onPress={() => navigation.navigate("details", { rate: 3 })}
      />
    </View>
  );
}
