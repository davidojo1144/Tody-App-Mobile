import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import "../../global.css";

export default function Home() {
  const router = useRouter();
  const [isAddingTask, setIsAddingTask] = useState<boolean>(false);
  const [taskText, setTaskText] = useState<string>(""); 

  const handleAddTask = () => {
    setIsAddingTask(true); 
  };

  const handleSaveTask = async () => {
    if (!taskText.trim()) return; 

    try {
      const existingTasks = await AsyncStorage.getItem("tasks");
      const tasks = existingTasks ? JSON.parse(existingTasks) : [];
      tasks.push(taskText.trim());
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));

      setTaskText("");
      setIsAddingTask(false);
      router.push("/task-list");
    } catch (err) {
      console.error("Error saving task:", err);
    }
  };

  const handleCancelTask = () => {
    setTaskText("");
    setIsAddingTask(false); 
  };

    


  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row justify-between items-center mb-6">
        <View>
          <Text className="text-2xl  font-medium">Today</Text>
          <Text className="text-md font-light text-gray-500 mt-3">
            Best platform for creating to-do lists
          </Text>
        </View>
        <TouchableOpacity >
          <Ionicons name="settings-outline" size={24} color="#757575" />
        </TouchableOpacity>
      </View>

      <View className="bg-[#26A69A] rounded-lg p-5 mb-4"></View>

      {isAddingTask ? (
        <View className="mb-4">
          <TextInput
            className="p-3 bg-gray-50 border border-gray-300 rounded-lg mb-2"
            placeholder="Type your task..."
            value={taskText}
            onChangeText={setTaskText}
            autoFocus={true}
            returnKeyType="done"
            onSubmitEditing={handleSaveTask}
          />
          <View className="flex-row justify-end gap-2">
            <TouchableOpacity
              className="px-4 py-2 bg-gray-200 rounded-lg"
              onPress={handleCancelTask}
            >
              <Text className="text-gray-700">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="px-4 py-2 bg-[#26A69A] rounded-lg"
              onPress={handleSaveTask}
              disabled={!taskText.trim()}
            >
              <Text className="text-white">Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity className="flex-row items-center gap-5 mb-4" onPress={handleAddTask}>
          <Ionicons name="add" size={20} color="#26A69A" className="mr-2" />
          <Text className="text-black text-md">Tap plus to create a new task</Text>
        </TouchableOpacity>
      )}

      <View className="p-4 bg-gray-50 rounded-lg flex flex-row items-center justify-between">
        <Text className="text-gray-500 text-md">Add your task</Text>
        <Text className="text-gray-400 text-sm mt-1">
          Today, {new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric", year: "numeric" })}
        </Text>
      </View>

      <TouchableOpacity className="pt-10 flex flex-row items-center gap-2" onPress={() => router.push("/(setting)/profileSetting")}>
        <Text className="text-xl font-medium">Profile Setting</Text>
        <Ionicons name="settings-outline" size={20} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}