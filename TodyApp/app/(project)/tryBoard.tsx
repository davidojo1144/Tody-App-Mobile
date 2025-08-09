import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import "../../global.css";

export default function TryBoard() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row gap-28 items-center mb-6">
         <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#000"  />
        </TouchableOpacity>
        <Text className="text-2xl font-medium">Try Boards</Text>
      </View>

      <View className="mb-6">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg text-gray-700">In Progress</Text>
          <Text className="text-gray-500 text-lg">...</Text>
        </View>
        <View className="mb-4">
          <View className="bg-[#26A69A] py-2 px-4 rounded-t-2xl">
            <Text className="text-white text-lg">Priority task 1</Text>
          </View>
          <View className="bg-white p-4 border-l-4 border-[#26A69A] rounded-b-2xl">
            <Text className="text-lg">Masyla Website Project</Text>
            <View className="flex-row items-center mt-2">
              <Ionicons name="time-outline" size={16} color="#EF5350" />
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
          <View className="bg-[#EF5350] py-2 px-4 rounded-t-2xl">
            <Text className="text-white text-lg">Priority task 3</Text>
          </View>
          <View className="bg-white p-4 border-l-4 border-[#EF5350] rounded-b-2xl">
            <Text className="text-lg">Medical Design System</Text>
            <View className="flex-row items-center mt-2">
              <Ionicons name="time-outline" size={16} color="#EF5350" />
              <Text className="text-gray-500 ml-2">08:30 PM</Text>
              <Ionicons name="chatbox-outline" size={16} color="#757575" className="ml-4" />
              <Text className="text-gray-500 ml-2">1</Text>
              <Ionicons name="attach-outline" size={16} color="#757575" className="ml-4" />
              <Text className="text-gray-500 ml-2">2</Text>
            </View>
            <Text className="text-gray-500 mt-2">Mon, 19 Jul 2022</Text>
          </View>
        </View>
      </View>

      <View>
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg text-gray-700">Completed</Text>
          <Text className="text-gray-500 text-lg">...</Text>
        </View>
        <View className="mb-4">
          <View className="bg-black py-2 px-4 rounded-t-2xl">
            <Text className="text-white text-lg">Priority task 1</Text>
          </View>
          <View className="bg-white p-4 border-l-4 border-black rounded-b-2xl">
            <Text className="text-lg">Titan Project</Text>
            <View className="flex-row items-center mt-2">
              <Ionicons name="time-outline" size={16} color="#EF5350" />
              <Text className="text-gray-500 ml-2">08:30 PM</Text>
              <Ionicons name="chatbox-outline" size={16} color="#757575" className="ml-4" />
              <Text className="text-gray-500 ml-2">1</Text>
              <Ionicons name="attach-outline" size={16} color="#757575" className="ml-4" />
              <Text className="text-gray-500 ml-2">2</Text>
            </View>
            <Text className="text-gray-500 mt-2">Mon, 20 Jul 2022</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}