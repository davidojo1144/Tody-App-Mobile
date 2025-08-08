import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Swiper from "react-native-swiper";
import "../global.css";

export default function onboarding2() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-white" edges={["top", "left", "right"]}>
      <Text className="text-teal-400 text-right text-xl font-medium pb-10">Skip</Text>
      <Image
      resizeMode="contain"
       source={require("../assets/images/Onboarding Image.png")}/>
       <Text className="text-4xl text-center text-black px-10 ">Your convenience in making a todo list</Text>
       <Text className="pt-5 text-gray-500 text-xl font-light text-center">Here's a mobile platform that helps you create task or to list so that it can help you in every job easier and faster.</Text>
       <TouchableOpacity className="mt-10 bg-teal-500 py-5 rounded-2xl">
        <Text>Continue</Text>
       </TouchableOpacity>
    </SafeAreaView>
  )
}