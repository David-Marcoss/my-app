import { useEffect } from "react";
import {
  Inter_800ExtraBold,
  Inter_400Regular_Italic,
  Inter_400Regular,
  useFonts,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";

import Routes from "./Routes";

//bloqueia o carregamento das telas
SplashScreen.preventAutoHideAsync();

export default function App() {
  // carrega as fonts Loaded -> indica se as fontes foram carregadas
  const [loaded, error] = useFonts({
    extraBold: Inter_800ExtraBold,
    regularItalic: Inter_400Regular_Italic,
    regular: Inter_400Regular,
  });

  useEffect(() => {
    // libera o carregamento da tela quando as fontes são carregadas
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Routes />;
}
