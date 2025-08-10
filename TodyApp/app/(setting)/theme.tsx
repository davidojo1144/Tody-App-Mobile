import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import "../../global.css";

export default function Theme() {
  const router = useRouter();
  const [selectedTheme, setSelectedTheme] = useState(null);

  const themes = [
    { name: "Orange", color: "#F57C00" },
    { name: "Yellow", color: "#FFCA28" },
    { name: "Green", color: "#388E3C" },
    { name: "Blue", color: "#1976D2" },
    { name: "Cyan", color: "#26A69A" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row gap-[15%] items-center mb-6">
        <TouchableOpacity onPress={() => router.back()} >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-xl font-medium">Theme</Text>
      </View>

      {themes.map((theme, index) => (
        <View key={index} className="mb-4">
          <TouchableOpacity
            className="bg-[#00000000] p-1 rounded-t-md"
            onPress={() => setSelectedTheme(theme.name)}
          >
            <View className="h-7 bg-[transparent]" style={{ backgroundColor: theme.color }} />
          </TouchableOpacity>
          <View className="bg-white p-3 rounded-b-lg border-l-4 border-gray-200">
            <View className="flex-row items-center">
              <Ionicons name="radio-button-off-outline" size={20} color="#B0BEC5" />
              <Text className="ml-3 text-gray-500">{theme.name}</Text>
            </View>
          </View>
        </View>
      ))}

      <TouchableOpacity className="bg-[#26A69A] py-4 rounded-2xl items-center mb-5 mt-auto">
        <Text className="text-white text-lg">More Theme</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}