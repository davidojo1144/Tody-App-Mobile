import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; // For navigation
import { useEffect, useState } from "react"; // For state and effect management
import AsyncStorage from "@react-native-async-storage/async-storage"; // For task persistence
import "../global.css";

export default function Tasklist() {
  const router = useRouter();
  const [tasks, setTasks] = useState<string[]>([]); // State to hold tasks

  // Load tasks from AsyncStorage when the component mounts
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("tasks");
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (err) {
        console.error("Error loading tasks:", err);
      }
    };
    loadTasks();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="mb-6">
        <Text className="text-3xl font-medium">Task List</Text>
      </View>

      {tasks.length > 0 ? (
        <View>
          {tasks.map((task, index) => (
            <View key={index} className="p-3 bg-gray-50 rounded-lg mb-2">
              <Text className="text-black text-md">{task}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text className="text-gray-500 text-center">No tasks yet</Text>
      )}

      <TouchableOpacity
        className="mt-auto px-4 py-2 bg-[#26A69A] rounded-lg justify-center items-center"
        onPress={() => router.back()}
      >
        <Text className="text-white text-lg font-medium">Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}