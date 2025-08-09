import { Text, View, TouchableOpacity, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import "../../global.css";
import { useRouter } from "expo-router";

export default function Upcoming() {
  const [todos, setTodos] = useState<any>([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleString('en-us', { month: 'long', year: 'numeric' }));
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleString('en-us', { month: 'long' }));
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const router = useRouter()

  useEffect(() => {
    fetch('https://dummyjson.com/todos?limit=10')
      .then((res) => res.json())
      .then((data) => setTodos(data.todos));
  }, []);

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const renderItem = ({ item }) => (
    <View className="mb-4">
      <TouchableOpacity
        className={`py-2 px-4 rounded-t-2xl ${item.completed ? 'bg-gray-400' : item.todo.includes('Medical') ? 'bg-[#EF5350]' : 'bg-[#26A69A]'}`}
        onPress={() => toggleComplete(item.id)}
      >
        <Text className="text-white text-lg">{item.todo}</Text>
      </TouchableOpacity>
      <View className={`bg-white p-4 border-l-4 ${item.completed ? 'border-gray-400' : item.todo.includes('Medical') ? 'border-[#EF5350]' : 'border-[#26A69A]'} rounded-b-2xl`}>
        <Text className="text-lg">{item.todo}</Text>
        <View className="flex-row items-center mt-2">
          <Ionicons name="time-outline" size={16} color="#757575" />
          <Text className="text-gray-500 ml-2">08:30 PM</Text>
          <Ionicons name="chatbox-outline" size={16} color="#757575" className="ml-4" />
          <Text className="text-gray-500 ml-2">1</Text>
          <Ionicons name="attach-outline" size={16} color="#757575" className="ml-4" />
          <Text className="text-gray-500 ml-2">2</Text>
        </View>
        <Text className="text-gray-500 mt-2">{currentMonth} {currentDay}, {currentYear}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row justify-between items-center mb-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-2xl font-medium">Upcoming</Text>
        <Ionicons name="search" size={24} color="#000" />
      </View>

      <View className="flex-row justify-between items-center mb-6">
        <TextInput
          className="text-lg text-gray-500"
          value={`${selectedDate}`}
          onChangeText={setSelectedDate}
        />
        <Text className="text-lg text-[#26A69A]">Today</Text>
      </View>

      <View className="flex-row justify-around mb-6">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
          <View key={index} className={`w-10 h-10 rounded-full justify-center items-center ${index === 2 ? 'bg-[#26A69A]' : 'bg-gray-200'}`}>
            <Text className={index === 2 ? 'text-white' : 'text-gray-500'}>{day}</Text>
            <Text className={index === 2 ? 'text-white' : 'text-gray-500'}>{index + 5}</Text>
          </View>
        ))}
      </View>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <View className="flex-row justify-between mb-4">
            <Text className="text-lg text-gray-500">Today, {new Date().toLocaleString('en-us', { weekday: 'long' })}</Text>
            <TouchableOpacity>
              <Text className="text-[#26A69A] text-lg">Reschedule</Text>
            </TouchableOpacity>
          </View>
        }
      />

      <TouchableOpacity className="absolute bottom-5 right-5 bg-[#26A69A] w-12 h-12 rounded-full justify-center items-center">
        <Text className="text-white text-2xl">+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}