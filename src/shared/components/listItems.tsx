import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../Theme/Theme";
import IHumorData from "../interfaces/IHumorData";
import Card from "./card";

interface IListItemsProps {
  data: IHumorData[];
}

export default function ListItems({ data }: IListItemsProps) {
  return (
    <View style={style.listContainer}>
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  listContainer: {
    flexDirection: "column",
    gap: 4,
  },
});
