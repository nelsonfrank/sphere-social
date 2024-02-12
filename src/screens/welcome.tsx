import { useCallback } from "react";
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
import {
 Pacifico_400Regular
} from "@expo-google-fonts/pacifico";
import * as SplashScreen from "expo-splash-screen";
import { Image } from "expo-image";

SplashScreen.preventAutoHideAsync();

export default function WelcomeScreen({ navigation }: any) {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  let [fontsLoaded] = useFonts({
    Inter_300: Inter_300Light,
    Inter_400: Inter_400Regular,
    Inter_500: Inter_500Medium,
    Inter_600: Inter_600SemiBold,
    Inter_700: Inter_700Bold,
    Pacifico_400: Pacifico_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handleStart = () => {
    navigation.navigate("Categories");
  };
  return (
    <View className="flex-1 flex-col py-2" onLayout={onLayoutRootView}>
      <View style={{ flex: 1 }} className="flex flex-col justify-end py-4">
        <Text
          style={{ fontFamily: "Pacifico_400" }}
          className="text-3xl font-semibold text-center py-2"
        >
          Sphere
        </Text>
      </View>
      <View style={{ flex: 5 }}>
        <Image
          style={{
            flex: 1,
            width: "100%",
          }}
          source={require("../../assets/images/welcome.png")}
          contentFit="contain"
          transition={1000}
        />
      </View>
      <View style={{ flex: 4 }} className="flex justify-center mx-2">
        <View style={{ flex: 3 }} className=" flex justify-center">
          <Text
            style={{ fontFamily: "Inter_600" }}
            className="text-5xl text-gray-900 font-semibold text-center tracking-widest mx-1"
          >
            Explore the best content by unique people
          </Text>
        </View>
        <View style={{ flex: 2 }} className="flex items-center mt-8">
          <TouchableOpacity
            className="border-border border-4 p-2 rounded-full w-28 h-28"
            onPress={handleStart}
          >
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
