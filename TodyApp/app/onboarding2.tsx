import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import "../global.css";

export default function Onboarding2() {
  const router = useRouter();
  const { width, height } = Dimensions.get("window"); 

  return (
    <SafeAreaView className="flex-1 p-4 bg-white" edges={["top", "left", "right"]}>
      <View className="flex-row justify-between items-center pb-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} color="teal" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text className="text-teal-400 text-xl  font-medium">Skip</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 justify-center items-center">
        <Image
          resizeMode="contain"
          source={require("../assets/images/Onboarding Image.png")}
          style={{ width: width * 0.9, maxHeight: height * 0.4 }} 
        />
      </View>
      <View className="px-4">
        <Text className="text-4xl text-center text-black">
          Your convenience in making a todo list
        </Text>
        <Text className="pt-3 text-gray-500 text-base font-light text-center">
          Here's a mobile platform that helps you create task or to-do list so that it can help you in every job easier and faster.
        </Text>
      </View>
      <TouchableOpacity
        className="mt-6 bg-teal-500 py-5 rounded-2xl mb-5"
        onPress={() => router.push("/onboarding3")}
      >
        <Text className="text-white text-lg text-center">Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}