import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import "../../global.css";

export default function AppIcon() {
  const router = useRouter();
  const [selectedIcon, setSelectedIcon] = useState(null);

  const icons = [
    { color: "#EF5350", selected: false }, 
    { color: "#1976D2" }, 
    { color: "#388E3C" }, 
    { color: "#F57C00" }, 
    { color: "#000000" }, 
    { color: "#F06292" }, 
    { color: "#FFCA28" }, 
    { color: "#42A5F5" }, 
    { color: "#AB47BC" }, 
    { color: "#26A69A" }, 
    { color: "#40C4FF" }, 
    { color: "#EF5350" }, 
    { color: "#D81B60" }, 
    { color: "#F4511E" }, 
  ];

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row gap-[20%] items-center mb-6">
        <TouchableOpacity onPress={() => router.back()} >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-xl font-medium">App Icon</Text>
      </View>

      <View className="justify-center">
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

      <TouchableOpacity className="bg-[#26A69A] py-4 rounded-2xl mb-4 items-center mt-auto">
        <Text className="text-white text-lg">Save Icon</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}