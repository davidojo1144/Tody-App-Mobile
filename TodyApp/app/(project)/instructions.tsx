import { Text, View, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import "../../global.css";

export default function Instructions() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row gap-28 items-center mb-6">
        <Ionicons name="chevron-back" size={24} color="#000" onPress={() => router.back()} />
        <Text className="text-2xl font-medium">Instructions</Text>
      </View>

      <View className="mb-6">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg text-[#26A69A]">Tips and tricks 4</Text>
          <Text className="text-gray-500 text-lg">...</Text>
        </View>
        <View className="bg-white">
          <Text className="py-3 border-b border-gray-200 text-gray-700">Use click Add to create tasks!</Text>
          <Text className="py-3 border-b border-gray-200 text-gray-700">Start Own project!</Text>
          <Text className="py-3 border-b border-gray-200 text-gray-700">Organize these tasks!</Text>
          <Text className="py-3 text-gray-700">Schedule this task</Text>
        </View>
      </View>

      <View>
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg text-[#26A69A]">To Go Further 5</Text>
          <Text className="text-gray-500 text-lg">...</Text>
        </View>
        <View className="bg-white">
          <Text className="py-3 border-b border-gray-200 text-gray-700">What do you thing about Todyapp</Text>
          <Text className="py-3 border-b border-gray-200 text-gray-700">Visit the help center</Text>
          <Text className="py-3 border-b border-gray-200 text-gray-700">how to use Todyapp</Text>
          <Text className="py-3 border-b border-gray-200 text-gray-700">Get organize anywhere</Text>
          <Text className="py-3 text-gray-700">Kickstart your project</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}