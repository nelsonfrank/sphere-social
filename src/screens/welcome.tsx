import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();
export default function WelcomeScreen() {
    let [fontsLoaded, fontError] = useFonts({
      Inter_300: Inter_300Light,
      Inter_400: Inter_400Regular,
      Inter_500: Inter_500Medium,
      Inter_600: Inter_600SemiBold,
      Inter_700: Inter_700Bold,
    });

    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
      return null;
    }

  return (
    <View className="flex-1  justify-center mx-4" onLayout={onLayoutRootView}>
      <View>
        <Text className="text-3xl text-blue-500">Welcome Page</Text>
      </View>
      <View>
        <View className="">
          <Text
            style={{ fontFamily: "Inter_400" }}
            className="text-5xl font-semibold text-center"
          >
            Explore the best content by unique people
          </Text>
        </View>
        <View className="flex items-center mt-10">
          <TouchableOpacity className="border-border border-r-black border-4 p-2 rounded-full w-28 h-28">
            <View className=" bg-black text-white rounded-full p-6">
              <Ionicons
                name="chevron-forward-outline"
                size={32}
                color={"white"}
              ></Ionicons>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
