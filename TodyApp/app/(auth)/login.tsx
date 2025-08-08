import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import "../../global.css";

export default function login() {
  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <Text className="text-3xl text-black font-medium text-center ">Welcome Back!</Text>
      <Text className="text-md text-gray-500 font-medium text-center mt-3 ">Your work faster and structured with Todyapp</Text>

      <View className="flex flex-col gap-3 mt-10">
        <Text className="text-xl text-black font-medium ">Email Address</Text>
        <TextInput
        className="py-4"
        placeholder="Enter your email"
        />
      </View>
    </SafeAreaView>
  )
}