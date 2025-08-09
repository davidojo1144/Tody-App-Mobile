import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import "../../global.css";

export default function HelpCenter() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row gap-28 items-center mb-6">
        <TouchableOpacity onPress={() => router.back()} >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-2xl font-medium">Help Center</Text>
      </View>

      <TextInput
        className="bg-gray-100 p-5 rounded-lg mb-6 text-gray-500"
        placeholder="Search Topic"
        placeholderTextColor="#B0BEC5"
      />

      <View className="flex-row flex-wrap justify-around mb-6">
        <TouchableOpacity className="w-[40%] h-32 bg-gray-100 rounded-lg items-center justify-center mb-4">
          <Ionicons name="laptop-outline" size={40} color="#757575" />
          <Text className="text-gray-500 mt-2 text-center">Platforms are used</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[40%] h-32 bg-gray-100 rounded-lg items-center justify-center mb-4">
          <Ionicons name="chatbox-ellipses-outline" size={40} color="#757575" />
          <Text className="text-gray-500 mt-2 text-center">Usage question</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[40%] h-32 bg-gray-100 rounded-lg items-center justify-center mb-4">
          <Ionicons name="happy-outline" size={40} color="#757575" />
          <Text className="text-gray-500 mt-2 text-center">Application usage</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[40%] h-32 bg-gray-100 rounded-lg items-center justify-center mb-4">
          <Ionicons name="timer-outline" size={40} color="#757575" />
          <Text className="text-gray-500 mt-2 text-center">Update Time App</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[40%] h-32 bg-gray-100 rounded-lg items-center justify-center mb-4">
          <Ionicons name="desktop-outline" size={40} color="#757575" />
          <Text className="text-gray-500 mt-2 text-center">Cross Platform App</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[40%] h-32 bg-gray-100 rounded-lg items-center justify-center mb-4">
          <Ionicons name="notifications-outline" size={40} color="#757575" />
          <Text className="text-gray-500 mt-2 text-center">Update reminder</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="bg-[#26A69A] py-4 rounded-2xl mb-4 items-center mt-auto">
        <Text className="text-white text-lg">More Topics</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}