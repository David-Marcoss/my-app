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
  home: undefined;
  details: { rate: number };
  setUserName: undefined;
};

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenLayout={({ children }) => <SafeAreaView>{children}</SafeAreaView>}
        screenOptions={{
          headerShown: false,
          contentStyle: {
            flex: 1,
            backgroundColor: theme.colors.background,
          },
        }} // omit o header
      >
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Group
          screenOptions={{ sheetCornerRadius: 24, presentation: "formSheet" }} // configura a borda da pagina e como a pagina é aberta
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
              sheetAllowedDetents: [0.4, 0.6],
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
