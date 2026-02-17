import { Text } from "@react-navigation/elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { TNavigationProps, TRouteProps } from "../Routes";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import BaseInput from "../shared/components/baseInput";
import { theme } from "../shared/Theme/Theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { useEffect, useState } from "react";
import Card from "../shared/components/card";
import IHumorData from "../shared/interfaces/IHumorData";

export default function HomeScreen() {
  const [username, setUsername] = useState("");
  const [humorData, setHumorData] = useState<IHumorData[]>([]);

  const navigation = useNavigation<TNavigationProps>();

  const { params } = useRoute<TRouteProps<"home">>();

  useEffect(() => {
    if (params && params.newUsername?.trim()) {
      setUsername(params.newUsername);
    }
  }, [params?.newUsername]);

  useEffect(() => {
    const item = params?.item;
    if (item) {
      handleCreateItem(item);
    }
  }, [params?.item]);

  const handleCreateItem = (item: IHumorData) => {
    if (humorData.some((data) => data.id === item.id)) return;

    setHumorData((prevData) => [...prevData, item]);
  };

  const handleDeleteItem = (id: string) => {
    setHumorData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleNavigateToDetails = (rate: number) => {
    navigation.navigate("details", {
      rate,
    });
  };

  return (
    <>
      <Header name={username} />

      <FlatList
        contentContainerStyle={style.listContainer}
        data={humorData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card key={item.id} data={item} />}
        ListEmptyComponent={() => (
          <View style={style.emptyContainer}>
            <Text style={style.emptyText}>
              Você ainda não {"\n"} registrou seu humor hoje.
            </Text>
          </View>
        )}
      />

      <Footer>
        <View style={style.viewContainer}>
          <Text style={style.textFooter}>
            {username ? "Como está seu humor hoje?" : "Qual o seu nome?"}
          </Text>

          {username ? (
            <View style={style.footerStarContainer}>
              <TouchableOpacity onPress={() => handleNavigateToDetails(1)}>
                <MaterialIcons
                  name="star-border"
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigateToDetails(2)}>
                <MaterialIcons
                  name="star-border"
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigateToDetails(3)}>
                <MaterialIcons
                  name="star-border"
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigateToDetails(4)}>
                <MaterialIcons
                  name="star-border"
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigateToDetails(5)}>
                <MaterialIcons
                  name="star-border"
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <BaseInput
              label="Nome"
              asButton
              onPress={() => navigation.navigate("setUserName")}
            >
              <TextInput
                editable={false}
                pointerEvents="none"
                style={style.textInput}
                placeholder="Digite aqui o seu nome..."
                placeholderTextColor={theme.colors.textPlaceholder}
              />
            </BaseInput>
          )}
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
  textInput: {
    padding: 8,
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
  },
  listContainer: {
    flexGrow: 1,
    flexDirection: "column",
    gap: 4,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    textAlign: "center",
    fontSize: theme.fonts.sizes.subtitle,
    fontFamily: theme.fonts.family.regularItalic,
    color: theme.colors.textPlaceholder,
  },
  footerStarContainer: {
    gap: 8,
    paddingVertical: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "center",
  },
});
