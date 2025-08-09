import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import "../../global.css";

export default function Project() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row justify-between items-center mb-6">
        <Ionicons name="chevron-back" size={24} color="#000" onPress={() => router.back()} />
        <Text className="text-2xl font-medium">Project</Text>
        <Ionicons name="search" size={24} color="#000" />
      </View>

      <View className="mb-6">
        <Text className="text-xl text-black mb-2">Filter your task</Text>
        <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-lg mb-2" onPress={() => router.push("/(project)/instructions")}>
          <Ionicons name="help-circle-outline" size={20} color="#757575" />
          <Text className="text-gray-700 ml-2">Instructions For Use</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-lg mb-2" onPress={() => router.push("/(project)/tryBoard")}>
          <Ionicons name="grid-outline" size={20} color="#757575" />
          <Text className="text-gray-700 ml-2">Try Boards</Text>
          <Ionicons name="heart-outline" size={16} color="#B0BEC5" className="ml-auto mr-2" />
          <Ionicons name="heart-outline" size={16} color="#B0BEC5" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-lg">
          <Ionicons name="settings" size={20} color="#757575" />
          <Text className="text-gray-700 ml-2">Manage Projects</Text>
          <Ionicons name="heart-outline" size={16} color="#B0BEC5" className="ml-auto mr-2" />
          <Ionicons name="heart-outline" size={16} color="#B0BEC5" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}