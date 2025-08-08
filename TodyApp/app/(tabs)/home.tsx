import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router"; // Added useLocalSearchParams for potential query params
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react"; // Added for state management
import "../../global.css";

export default function Home() {
  const router = useRouter();
  const [isAddingTask, setIsAddingTask] = useState(false); // Toggle task input visibility
  const [taskText, setTaskText] = useState(""); // Store the typed task
  const [tasks, setTasks] = useState<string[]>([]); // Store added tasks

  const handleAddTask = () => {
    if (isAddingTask && taskText.trim()) {
      setTasks([...tasks, taskText.trim()]); // Add new task to the list
      setTaskText(""); // Clear input
    }
    setIsAddingTask(!isAddingTask); // Toggle input visibility
  };

  const handleSaveTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, taskText.trim()]); // Save task
      setTaskText(""); // Clear input
      setIsAddingTask(false); // Hide input
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row justify-between items-center mb-6">
        <View>
          <Text className="text-3xl font-medium">Today</Text>
          <Text className="text-xl font-light text-gray-500 mt-3">
            Best platform for creating to-do lists
          </Text>
        </View>
        <TouchableOpacity>
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
              onPress={() => {
                setTaskText("");
                setIsAddingTask(false);
              }}
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

      {tasks.length > 0 && (
        <View className="mt-4">
          {tasks.map((task, index) => (
            <Text key={index} className="text-black text-md mb-2">
              {task}
            </Text>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
}