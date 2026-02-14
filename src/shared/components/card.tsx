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

interface ICardProps {
  data: IHumorData;
}

export default function Card({
  data: { description, dateTime, rate },
}: ICardProps) {
  const starIsActive = (starNumber: number) => {
    return starNumber <= rate;
  };
  return (
    <View style={style.cardContainer}>
      <Text style={style.dateTimeText}>{dateTime}</Text>

      <View style={style.starContainer}>
        <TouchableOpacity>
          <MaterialIcons
            name={starIsActive(1) ? "star" : "star-border"}
            size={36}
            color={
              starIsActive(1)
                ? theme.colors.highlight
                : theme.colors.textPlaceholder
            }
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name={starIsActive(2) ? "star" : "star-border"}
            size={36}
            color={
              starIsActive(2)
                ? theme.colors.highlight
                : theme.colors.textPlaceholder
            }
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name={starIsActive(3) ? "star" : "star-border"}
            size={36}
            color={
              starIsActive(3)
                ? theme.colors.highlight
                : theme.colors.textPlaceholder
            }
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name={starIsActive(4) ? "star" : "star-border"}
            size={36}
            color={
              starIsActive(4)
                ? theme.colors.highlight
                : theme.colors.textPlaceholder
            }
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name={starIsActive(5) ? "star" : "star-border"}
            size={36}
            color={
              starIsActive(5)
                ? theme.colors.highlight
                : theme.colors.textPlaceholder
            }
          />
        </TouchableOpacity>
      </View>

      <Text style={style.descriptionText} numberOfLines={2}>
        {description}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: theme.colors.paper,
    gap: 4,
    padding: 8,
    margin: 8,
    borderRadius: 16,
  },
  dateTimeText: {
    textAlign: "left",
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.textPlaceholder,
  },
  descriptionText: {
    textAlign: "left",
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
  },

  starContainer: {
    gap: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
