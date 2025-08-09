import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { useRouter } from "expo-router";

export default function login() {
    const router = useRouter()

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-1">
        <Text className="text-3xl text-black font-medium text-center">Welcome Back!</Text>
        <Text className="text-md text-gray-500 font-medium text-center mt-3">
          Your work faster and structured with Todyapp
        </Text>

        <View className="flex flex-col gap-3 mt-10">
          <Text className="text-xl text-black font-medium">Email Address</Text>
          <TextInput
            textContentType="emailAddress"
            className="p-5 bg-gray-50 border border-gray-300 rounded-md"
            placeholder="name@example.com"
            placeholderTextColor="gray"
          />
        </View>
      </View>

      <TouchableOpacity className="bg-teal-500 py-5 rounded-2xl justify-center items-center mb-5" onPress={() => router.push("/(auth)/signup")}>
        <Text className="text-white text-xl font-medium">Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}