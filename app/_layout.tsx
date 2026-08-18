import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "ZalandoSans-Regular": require("../assets/fonts/ZalandoSans-Regular.ttf"),
    "ZalandoSans-Medium": require("../assets/fonts/ZalandoSans-Medium.ttf"),
    "ZalandoSans-SemiBold": require("../assets/fonts/ZalandoSans-SemiBold.ttf"),
    "ZalandoSans-Bold": require("../assets/fonts/ZalandoSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Stack />;
}
