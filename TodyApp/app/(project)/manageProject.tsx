import { Text, View, TouchableOpacity, TextInput, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import "../../global.css";

export default function manageProject() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row gap-24 items-center mb-6">
       <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} onPress={() => router.back()} />
        </TouchableOpacity>
        <Text className="text-2xl font-medium ml-4">Manage Project</Text>
      </View>

      <Text className="text-xl text-black mb-2">Name Project</Text>
      <TextInput
        className="bg-gray-100 p-5 rounded-lg text-gray-500"
        value="Name project"
      />

      <View className="mt-6">
        <TouchableOpacity className="flex-row items-center gap-3 py-3">
          <Ionicons name="water-outline" size={20} color="#757575" />
          <View>
            <Text className=" text-gray-700">Color</Text>
            <Text className=" text-gray-500">Charcoal</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center gap-3 py-3 border-t border-gray-200">
          <Ionicons name="people-outline" size={20} color="#757575" />
          <View>
            <Text className=" text-gray-700">Collaborators</Text>
            <Text className=" text-gray-500">no collaborators</Text>
          </View>
        </TouchableOpacity>

        <View className="flex-row items-center py-3 border-t border-gray-200">
          <Ionicons name="star-outline" size={20} color="#757575" />
          <Text className="ml-3 text-gray-700">Favorite</Text>
          <Switch
            value={true}
            trackColor={{ false: "#767577", true: "#26A69A" }}
            thumbColor="white"
            className="ml-auto"
          />
        </View>
      </View>

      <TouchableOpacity className="flex-row items-center gap-3 py-3 border-t border-gray-200 pb-10">
          <Ionicons name="people-outline" size={20} color="#757575" />
          <Text className=" text-gray-700">View</Text>
      </TouchableOpacity>

      <View className="flex-row justify-between">
        <TouchableOpacity className="border-2 border-[#26A69A] p-4 rounded-lg w-[48%] items-center">
          <View className="w-full">
            <View className="flex-row items-center mb-2">
              <View className="w-3 h-3 bg-[#26A69A] rounded-full" />
              <View className="ml-2 flex-1 h-3 bg-[#26A69A] rounded" />
            </View>
            <View className="flex-row items-center mb-2">
              <View className="w-3 h-3 bg-[#26A69A] rounded-full" />
              <View className="ml-2 flex-1 h-3 bg-[#26A69A] rounded" />
            </View>
            <View className="flex-row items-center">
              <View className="w-3 h-3 bg-[#26A69A] rounded-full" />
              <View className="ml-2 flex-1 h-3 bg-[#26A69A] rounded" />
            </View>
          </View>
          <Text className="text-[#26A69A] mt-2">View List</Text>
        </TouchableOpacity>

        <TouchableOpacity className="border border-gray-300 p-4 rounded-lg w-[48%] items-center">
          <View className="flex-row flex-wrap justify-center w-full">
            <View className="w-6 h-6 bg-gray-200 rounded-full m-1" />
            <View className="w-6 h-6 bg-gray-200 rounded-full m-1" />
            <View className="w-6 h-6 bg-gray-200 rounded-full m-1" />
            <View className="w-6 h-6 bg-gray-200 rounded-full m-1" />
            <View className="w-6 h-6 bg-gray-200 rounded-full m-1" />
            <View className="w-6 h-6 bg-gray-200 rounded-full m-1" />
          </View>
          <Text className="text-gray-500 mt-2">View Boards</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}