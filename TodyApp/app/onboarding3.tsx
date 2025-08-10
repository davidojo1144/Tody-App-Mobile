import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import "../global.css";

export default function Onboarding3() {
  const router = useRouter();
  const { width, height } = Dimensions.get("window"); 

  return (
    <SafeAreaView className="flex-1 p-4 bg-white" edges={["top", "left", "right"]}>
      <View className="flex-row justify-between items-center pb-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} color="teal" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text className="text-teal-400 text-xl font-medium">Skip</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 justify-center items-center">
        <Image
          resizeMode="contain"
          source={require("../assets/images/Onboarding Image2.png")}
          style={{ width: width * 0.9, maxHeight: height * 0.8 }} 
        />
      </View>
      <TouchableOpacity
        className="mt-6 bg-teal-500 py-5 mb-5 rounded-2xl"
        onPress={() => router.push("/welcome")}
      >
        <Text className="text-white text-lg text-center">Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}