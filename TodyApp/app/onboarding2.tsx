import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Swiper from "react-native-swiper";
import "../global.css";

export default function onboarding2() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-white" edges={["top", "left", "right"]}>
      <Text className="text-teal-400 text-end text-xl font-medium pb-5">Skip</Text>
      <Image source={require("../assets/images/Onboarding Image.png")}/>
    </SafeAreaView>
  )
}