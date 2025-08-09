import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; 
import { useEffect, useState } from "react"; 
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import "../global.css";

export default function Tasklist() {
  const router = useRouter();
  const [tasks, setTasks] = useState<string[]>([]); 

  
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

  
  const handleDeleteTask = async (indexToDelete: number) => {
    try {
      const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
      setTasks(updatedTasks);
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="mb-6">
        <Text className="text-3xl font-medium">Task List</Text>
      </View>

      {tasks.length > 0 ? (
        <View>
          {tasks.map((task, index) => (
            <View key={index} className="p-5 bg-gray-50 rounded-lg mb-2 flex-row justify-between items-center">
              <Text className="text-black text-md">{task}</Text>
              <TouchableOpacity
                className="px-3 py-1 bg-red-500 rounded-lg"
                onPress={() => handleDeleteTask(index)}
              >
                <Text className="text-white text-sm">Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : (
        <Text className="text-gray-500 text-center">No tasks yet</Text>
      )}

      <TouchableOpacity
        className="mt-auto px-4 py-3 bg-[#26A69A] mb-5 rounded-2xl justify-center items-center"
        onPress={() => router.back()}
      >
        <Text className="text-white text-lg font-medium">Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}