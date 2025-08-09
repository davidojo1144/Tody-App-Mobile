import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import "../../global.css";

export default function Productivity() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users/1')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row gap-28 items-center mb-6">
        <TouchableOpacity onPress={() => router.back()} >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-2xl font-medium">Productivity</Text>
      </View>

      {user && (
        <View className="items-center mb-6">
          <View className="relative">
            <Image
              source={{ uri: user.image }}
              className="w-20 h-20 rounded-full"
            />
          </View>
          <Text className="text-xl font-medium mt-2">{`${user.firstName} ${user.lastName}`}</Text>
          <Text className="text-gray-500 mt-2">@{user.username}</Text>
        </View>
      )}

      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-gray-500">20 Jul 2022</Text>
        <TouchableOpacity>
          <Text className="text-gray-500">My Report</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-6">
        <Text className="text-lg text-gray-700 mb-2">Report Progress</Text>
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-[#26A69A] text-lg">Set a goal</Text>
            <Text className="text-[#26A69A] text-lg">28/20 Task</Text>
            <Text className="text-gray-500 mt-2">Finish your task now !</Text>
          </View>
          <View className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <Ionicons name="star" size={24} color="#26A69A" />
          </View>
        </View>
      </View>

      <View className="mb-6">
        <Text className="text-lg text-gray-700 mb-2">Statistic Goals</Text>
        <View className="bg-gray-100 p-4 rounded-lg">
          <Text className="text-gray-500 mb-2">Monthly Progress</Text>
          <View className="flex-row justify-between items-end h-32">
            <View className="flex-1 items-center">
              <Text className="text-gray-500 text-xs">Mar</Text>
              <View className="w-6 bg-[#26A69A] h-16 mt-1 rounded-t" />
            </View>
            <View className="flex-1 items-center">
              <Text className="text-gray-500 text-xs">May</Text>
              <View className="w-6 bg-[#B0BEC5] h-12 mt-1 rounded-t" />
            </View>
            <View className="flex-1 items-center">
              <Text className="text-gray-500 text-xs">Jun</Text>
              <View className="w-6 bg-[#26A69A] h-24 mt-1 rounded-t" />
            </View>
            <View className="flex-1 items-center">
              <Text className="text-gray-500 text-xs">Jul</Text>
              <View className="w-6 bg-[#26A69A] h-20 mt-1 rounded-t" />
            </View>
            <View className="flex-1 items-center">
              <Text className="text-gray-500 text-xs">Aug</Text>
              <View className="w-6 bg-[#B0BEC5] h-14 mt-1 rounded-t" />
            </View>
          </View>
          <Text className="text-gray-500 text-xs mt-2 text-center">Completed</Text>
        </View>
      </View>

      <TouchableOpacity className="bg-[#26A69A] py-4 rounded-2xl mb-3 items-center mt-auto">
        <Text className="text-white text-lg">More Statistic</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}