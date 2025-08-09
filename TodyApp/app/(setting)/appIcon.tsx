import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import "../../global.css";

export default function AppIcon() {
  const router = useRouter();
  const [selectedIcon, setSelectedIcon] = useState(null);

  const icons = [
    { color: "#EF5350", selected: true }, // Red with checkmark
    { color: "#1976D2" }, // Blue
    { color: "#388E3C" }, // Green
    { color: "#F57C00" }, // Orange
    { color: "#000000" }, // Black
    { color: "#F06292" }, // Pink
    { color: "#FFCA28" }, // Yellow
    { color: "#42A5F5" }, // Light Blue
    { color: "#AB47BC" }, // Purple
    { color: "#26A69A" }, // Teal
    { color: "#40C4FF" }, // Cyan
    { color: "#EF5350" }, // Red
    { color: "#D81B60" }, // Pink
    { color: "#F4511E" }, // Orange
  ];

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row justify-between items-center mb-6">
        <Ionicons name="chevron-back" size={24} color="#000" onPress={() => router.back()} />
        <Text className="text-3xl font-medium">App Icon</Text>
      </View>

      <View className="flex-1 justify-center">
        <View className="flex-row flex-wrap justify-around mb-6">
          {icons.map((icon, index) => (
            <TouchableOpacity
              key={index}
              className="w-16 h-16 m-2 rounded-lg items-center justify-center"
              style={{ backgroundColor: icon.color }}
              onPress={() => setSelectedIcon(index)}
            >
              {icon.selected || selectedIcon === index ? (
                <Ionicons name="checkmark-circle" size={24} color="#26A69A" />
              ) : (
                <Ionicons name="list-outline" size={24} color="white" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity className="bg-[#26A69A] py-3 rounded-lg items-center mt-auto">
        <Text className="text-white text-lg">Save Icon</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}