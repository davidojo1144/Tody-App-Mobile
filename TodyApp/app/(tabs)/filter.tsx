import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import "../../global.css";

export default function Filter() {
  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row justify-between items-center mb-6">
        <Ionicons name="chevron-back" size={24} color="#000" />
        <Text className="text-3xl font-medium">Filter & Labels</Text>
        <Ionicons name="search" size={24} color="#000" />
      </View>

      <View className="mb-6">
        <Text className="text-lg text-gray-500 mb-2">Filter your task</Text>
        <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-lg mb-2">
          <Ionicons name="filter" size={20} color="#757575" />
          <Text className="text-gray-700 ml-2">Assigned to me</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-lg mb-2">
          <Ionicons name="star" size={20} color="#FFCA28" />
          <Text className="text-gray-700 ml-2">Priority 1</Text>
          <Text className="text-gray-500 ml-auto">1</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-lg mb-2">
          <Ionicons name="flame" size={20} color="#EF5350" />
          <Text className="text-gray-700 ml-2">Priority 3</Text>
          <Text className="text-gray-500 ml-auto">1</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-lg">
          <Ionicons name="settings" size={20} color="#757575" />
          <Text className="text-gray-700 ml-2">Manage Filter</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text className="text-lg text-gray-500 mb-2">Labels</Text>
        <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-lg mb-2">
          <Ionicons name="pricetag" size={20} color="#757575" />
          <Text className="text-gray-700 ml-2">Masana label</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-lg">
          <Ionicons name="settings" size={20} color="#757575" />
          <Text className="text-gray-700 ml-2">Manage labels</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}