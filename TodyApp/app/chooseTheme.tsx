import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChooseTheme() {
  const router = useRouter();
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(false); 

  const themes = [
    { color: "#26A69A", name: "Teal" }, 
    { color: "#000000", name: "Black" }, 
    { color: "#EF5350", name: "Red" },   
    { color: "#1976D2", name: "Blue" },  
  ];

  const handleThemeSelect = (color: string) => {
    setSelectedTheme(color);
  };

  const handleOpenTodyapp = async () => {
    if (!selectedTheme) {
      return; 
    }
    setIsLoading(true);
    try {
      
      await AsyncStorage.setItem("selectedTheme", selectedTheme);
      router.push("/(tabs)/home"); 
    } catch (err) {
      console.error("Error saving theme:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl font-medium text-center mb-4">Create to do list</Text>
        <Text className="text-xl font-light text-gray-500 text-center mb-6">
          Choose your to do list color theme:
        </Text>

        {themes.map((theme) => (
          <TouchableOpacity
            key={theme.color}
            className="w-full mb-4 p-4 bg-gray-50 rounded-lg flex-row items-center"
            onPress={() => handleThemeSelect(theme.color)}
            style={{
              borderWidth: selectedTheme === theme.color ? 2 : 0,
              borderColor: selectedTheme === theme.color ? theme.color : "transparent",
            }}
          >
            <View
              className="w-4 h-4 mr-3 rounded-full border border-gray-400"
              style={{
                backgroundColor: selectedTheme === theme.color ? theme.color : "transparent",
              }}
            />
            <View
              className="flex-1 h-12 rounded-t-lg"
              style={{ backgroundColor: theme.color }}
            />
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          className={`w-full py-4 rounded-2xl justify-center mt-40 items-center ${
            !selectedTheme || isLoading ? "bg-gray-400" : "bg-[#26A69A]"
          }`}
          onPress={handleOpenTodyapp}
          disabled={!selectedTheme || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text className="text-white text-lg font-medium">Open Todyapp</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}