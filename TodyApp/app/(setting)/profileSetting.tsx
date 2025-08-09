import { Text, View, TouchableOpacity, Image, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "../../global.css";

export default function ProfileSetting() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users/1')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("authToken");
      router.push('/'); 
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row justify-between items-center mb-6">
        <Ionicons name="chevron-back" size={24} color="#000" onPress={() => router.back()} />
        <Text className="text-2xl font-medium">Settings</Text>
        <Ionicons name="search" size={24} color="#000" />
      </View>

      {user && (
        <View className="items-center mb-6">
          <View className="relative">
            <Image
              source={{ uri: user.image }}
              className="w-20 h-20 rounded-full"
            />
            <View className="absolute bottom-0 right-0 bg-[#26A69A] w-6 h-6 rounded-full justify-center items-center">
              <Ionicons name="medkit" size={12} color="white" />
            </View>
          </View>
          <Text className="text-xl font-medium mt-2">{`${user.firstName} ${user.lastName}`}</Text>
          <Text className="text-gray-500">@{user.username}</Text>
        </View>
      )}

      <View>
        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200" onPress={()=> router.push("/(setting)/account")}>
          <Ionicons name="person-outline" size={20} color="#757575" />
          <Text className="ml-4 text-gray-700 flex-1">Account</Text>
          <Ionicons name="chevron-forward" size={20} color="#757575" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200" onPress={()=> router.push("/(setting)/theme")}>
          <Ionicons name="color-palette-outline" size={20} color="#757575" />
          <Text className="ml-4 text-gray-700 flex-1">Theme</Text>
          <Ionicons name="chevron-forward" size={20} color="#757575" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200" onPress={()=> router.push("/(setting)/appIcon")}>
          <Ionicons name="apps-outline" size={20} color="#757575" />
          <Text className="ml-4 text-gray-700 flex-1">App Icon</Text>
          <Ionicons name="chevron-forward" size={20} color="#757575" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200" onPress={()=> router.push("/(setting)/productivity")}>
          <Ionicons name="bar-chart-outline" size={20} color="#757575" />
          <Text className="ml-4 text-gray-700 flex-1">Productivity</Text>
          <Ionicons name="chevron-forward" size={20} color="#757575" />
        </TouchableOpacity>

        <View className="flex-row items-center py-4 border-b border-gray-200">
          <Ionicons name="moon-outline" size={20} color="#757575" />
          <Text className="ml-4 text-gray-700 flex-1">Change Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#26A69A" }}
            thumbColor="white"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200">
          <Ionicons name="shield-checkmark-outline" size={20} color="#757575" />
          <Text className="ml-4 text-gray-700 flex-1">Privacy Policy</Text>
          <Ionicons name="chevron-forward" size={20} color="#757575" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200" onPress={()=> router.push("/(setting)/helpCenter")}>
          <Ionicons name="help-circle-outline" size={20} color="#757575" />
          <Text className="ml-4 text-gray-700 flex-1">Help Center</Text>
          <Ionicons name="chevron-forward" size={20} color="#757575" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center py-4" onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#757575" />
          <Text className="ml-4 text-gray-700 flex-1">Log Out</Text>
          <Ionicons name="chevron-forward" size={20} color="#757575" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}