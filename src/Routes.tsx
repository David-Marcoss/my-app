import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import DetailScreen from "./screens/Detail";
import SetUserScreen from "./screens/SetUser";
import { HeaderShownContext } from "@react-navigation/elements";
import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import { theme } from "./shared/Theme/Theme";

// define a tipagem das paginas e seus paremetros
type TScreenDefinitions = {
  home: undefined | { newUsername: string };
  details: { rate: number };
  setUserName: undefined;
};

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenLayout={({ children }) => (
          //SafeAreaView -> ajusta as bordas da tela automaticamnete (edges prop -> indica em que cantos da tela vai ser aplicado os ajustes)
          <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
            {children}
          </SafeAreaView>
        )}
        screenOptions={{
          headerShown: false, // omit o header
          contentStyle: {
            // estilo geral da tela
            flex: 1,
            backgroundColor: theme.colors.background,
          },
        }}
      >
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Group
          screenLayout={({ children }) => (
            <SafeAreaView
              edges={["left", "right", "bottom"]}
              style={{
                flex: 1,
                paddingTop: 24,
                paddingHorizontal: 8,
                backgroundColor: theme.colors.paper,
              }}
            >
              {children}
            </SafeAreaView>
          )}
          screenOptions={{
            sheetCornerRadius: 24,
            presentation: "formSheet",
            contentStyle: {
              height: "100%",
            },
          }} // configura a borda da pagina e como a pagina é aberta
        >
          <Stack.Screen
            name="details"
            component={DetailScreen}
            options={{
              sheetAllowedDetents: [0.8, 0.95], // configura o tamanho da tela que vai ser exibida vai de 0 a 1
            }}
          />
          <Stack.Screen
            name="setUserName"
            component={SetUserScreen}
            options={{
              sheetAllowedDetents: [0.4],
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// tipagem para navegação entre paginas
export type TNavigationProps = NativeStackNavigationProp<TScreenDefinitions>;

// tipagem para os parametros da paginas
export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<
  TScreenDefinitions,
  T
>;
