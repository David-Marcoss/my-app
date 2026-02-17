import { useNavigation, useRoute } from "@react-navigation/native";
import { TNavigationProps, TRouteProps } from "../Routes";
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../shared/Theme/Theme";
import BaseInput from "../shared/components/baseInput";
import { useEffect, useState } from "react";
import { Button } from "../shared/components/Button";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { v4 as uuid } from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IHumorData from "../shared/interfaces/IHumorData";

export const HUMOR_DATA_STORAGE_KEY = "humor-data";

export default function DetailScreen() {
  const [rate, setRate] = useState(0);
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [showDatePickerModal, setShowDatePickerModal] = useState(false);

  const { params } = useRoute<TRouteProps<"details">>();
  const navigation = useNavigation<TNavigationProps>();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (params && params?.rate) {
      setRate(params.rate);
    }
  }, []);

  const starIsActive = (starNumber: number) => {
    return starNumber <= rate;
  };

  const handleCreateHumorData = async () => {
    const item = {
      id: params.id || uuid(),
      description,
      dateTime: dateTime.toLocaleString("pt-BR"),
      rate,
    };

    const humorData = await AsyncStorage.getItem(HUMOR_DATA_STORAGE_KEY);

    const parseData = humorData ? (JSON.parse(humorData) as IHumorData[]) : [];

    parseData.unshift(item);

    await AsyncStorage.setItem(
      HUMOR_DATA_STORAGE_KEY,
      JSON.stringify(parseData),
    );

    navigation.popTo("home", {
      item,
    });
  };

  return (
    <View style={{ ...style.viewContainer, paddingBottom: insets.bottom }}>
      <Text style={style.textFooter}>Como está seu humor hoje?</Text>

      <View style={style.footerStarContainer}>
        <TouchableOpacity onPress={() => setRate(1)}>
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
        <TouchableOpacity onPress={() => setRate(2)}>
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
        <TouchableOpacity onPress={() => setRate(3)}>
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
        <TouchableOpacity onPress={() => setRate(4)}>
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
        <TouchableOpacity onPress={() => setRate(5)}>
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

      <BaseInput
        label="Data e hora"
        asButton
        onPress={() => setShowDatePickerModal(true)}
      >
        <TextInput
          value={dateTime.toLocaleString("pt-BR")}
          editable={false}
          pointerEvents="none"
          style={style.textInput}
          placeholderTextColor={theme.colors.textPlaceholder}
        />
      </BaseInput>

      <DateTimePickerModal
        isVisible={showDatePickerModal}
        mode="datetime"
        date={dateTime}
        onConfirm={(date) => {
          setDateTime(date);
          setShowDatePickerModal(false);
        }}
        onCancel={() => setShowDatePickerModal(false)}
      />

      <BaseInput
        label="Descreva mais sobre seu humor"
        asButton
        onPress={() => {}}
      >
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={{ ...style.textInput, ...style.descriptionInput }}
          placeholderTextColor={theme.colors.textPlaceholder}
          placeholder="Escreva aqui"
          multiline
          numberOfLines={16}
        />
      </BaseInput>

      <View style={{ flex: 1 }} />

      <View style={style.actionsContainer}>
        {params.id && (
          <Button
            variant="outlined"
            color={theme.colors.error}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons
              size={18}
              name={"delete"}
              color={theme.colors.error}
            />
          </Button>
        )}
        <Button
          grow
          title="Cancelar"
          variant="outlined"
          onPress={() => navigation.goBack()}
        />
        <Button grow title="Salvar" onPress={handleCreateHumorData} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  viewContainer: {
    flexDirection: "column",
    gap: 4,
    flex: 1,
  },
  textFooter: {
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
  descriptionInput: {
    height: theme.fonts.sizes.body * 16,
    textAlignVertical: "top",
  },

  footerStarContainer: {
    gap: 8,
    paddingVertical: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  actionsContainer: {
    gap: 8,
    alignItems: "center",
    flexDirection: "row",
  },
});
