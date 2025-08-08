import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; 
import "../../global.css";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row justify-between items-center mb-6">
        <View>
          <Text className="text-3xl font-medium">Today</Text>
          <Text className="text-xl font-light text-gray-500 mt-3">
            Best platform for creating to-do lists
          </Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="#757575" />
        </TouchableOpacity>
      </View>

      <View className="bg-[#26A69A] rounded-lg p-5 mb-4"></View>

       <TouchableOpacity className="flex-row items-center gap-5 mb-4">
          <Ionicons name="add" size={20} color="teal" className="mr-2" />
          <Text className="text-black text-md">Tap plus to create a new task</Text>
        </TouchableOpacity>

      <View className="p-4 bg-gray-50 rounded-lg flex flex-row items-center justify-between">
        <Text className="text-gray-500 text-md">Add your task</Text>
        <Text className="text-gray-400 text-sm mt-1">Today, {new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric", year: "numeric" })}</Text>
      </View>
    </SafeAreaView>
  );
}