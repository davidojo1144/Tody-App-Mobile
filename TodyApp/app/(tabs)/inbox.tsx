import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import "../../global.css";

export default function Inbox() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row justify-between items-center mb-6">
         <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-2xl font-medium">Inbox</Text>
        <Ionicons name="search" size={24} color="#000" />
      </View>

      <View className="mb-10">
        <TouchableOpacity className="bg-[#26A69A] py-2 px-4 rounded-t-2xl">
          <Text className="text-white text-lg">Priority task 1</Text>
        </TouchableOpacity>
        <View className="bg-white p-4 border-l-4 border-[#26A69A] rounded-b-2xl">
          <Text className="text-lg">Masyla Website Project</Text>
          <View className="flex-row items-center mt-2">
            <Ionicons name="time-outline" size={16} color="#757575" />
            <Text className="text-gray-500 ml-2">08:30 PM</Text>
            <Ionicons name="chatbox-outline" size={16} color="#757575" className="ml-4" />
            <Text className="text-gray-500 ml-2">1</Text>
            <Ionicons name="attach-outline" size={16} color="#757575" className="ml-4" />
            <Text className="text-gray-500 ml-2">2</Text>
          </View>
          <Text className="text-gray-500 mt-2">Mon, 19 Jul 2022</Text>
        </View>
      </View>

      <View className="mb-4">
        <TouchableOpacity className="bg-[#EF5350] py-2 px-4 rounded-t-2xl">
          <Text className="text-white text-lg">Priority task 3</Text>
        </TouchableOpacity>
        <View className="bg-white p-4 border-l-4 border-[#EF5350] rounded-b-2xl">
          <Text className="text-lg">Medical Design System</Text>
          <View className="flex-row items-center mt-2">
            <Ionicons name="time-outline" size={16} color="#757575" />
            <Text className="text-gray-500 ml-2">08:30 PM</Text>
            <Ionicons name="chatbox-outline" size={16} color="#757575" className="ml-4" />
            <Text className="text-gray-500 ml-2">1</Text>
            <Ionicons name="attach-outline" size={16} color="#757575" className="ml-4" />
            <Text className="text-gray-500 ml-2">2</Text>
          </View>
          <Text className="text-gray-500 mt-2">Mon, 19 Jul 2022</Text>
        </View>
      </View>

      <TouchableOpacity className="absolute bottom-5 right-5 bg-[#26A69A] w-12 h-12 rounded-full justify-center items-center">
        <Text className="text-white text-2xl">+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}