import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons'
import { useState } from "react";
import { formData } from "@/types/type";

export default function signup() {
    const router = useRouter()
    const [formData, setFormData] = useState<formData>({
      username: "",
      password: ""
    })

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-1">
        <Text className="text-3xl text-black font-medium text-center">Create Account</Text>
        <Text className="text-md text-gray-500 font-medium text-center mt-3">
          Create your account and feel the benefits
        </Text>

        <View className="flex flex-col gap-3 mt-10">
          <Text className="text-xl text-black font-medium">Username</Text>
          <TextInput
            textContentType="username"
            className="p-5 bg-gray-50 border border-gray-300 rounded-md"
            placeholder="Enter your username"
            placeholderTextColor="gray"
          />
        </View>

        <View className="flex flex-col gap-3 mt-3">
        <Text className="text-xl text-black font-medium">Password</Text>
        <View className="relative">
          <TextInput
            textContentType="password"
            secureTextEntry={true} 
            className="p-5 pr-12 bg-gray-50 border border-gray-300 rounded-md" 
            placeholder="Enter your password"
            placeholderTextColor="gray"
          />
          <Ionicons
            name="eye-off-outline"
            size={24}
            color="gray" 
            style={{
              position: "absolute",
              right: 12, 
              top: "50%", 
              transform: [{ translateY: -12 }], 
            }}
          />
        </View>
      </View>
      </View>

      <TouchableOpacity className="bg-teal-500 py-5 rounded-2xl justify-center items-center mb-5" onPress={() => {}}>
        <Text className="text-white text-xl font-medium">Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}