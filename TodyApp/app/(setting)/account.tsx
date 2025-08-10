import { Text, View, TouchableOpacity, TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import "../../global.css";

export default function Account() {
  const router = useRouter();
  const [fullName, setFullName] = useState("Full name");
  const [email, setEmail] = useState("name@example.com");

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-row gap-[20%] items-center mb-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000"  />
        </TouchableOpacity>
        <Text className="text-xl font-medium">Account</Text>
      </View>

      <View className="mb-6">
        <Text className="text-xl text-black mb-2">Full Name</Text>
        <TextInput
          className="bg-gray-100 p-5 rounded-lg text-gray-500"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View className="mb-6">
        <Text className="text-xl text-black mb-2">Email</Text>
        <TextInput
          className="bg-gray-100 p-5 rounded-lg text-gray-500"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View className="mb-6">
        <Text className="text-xl text-black mb-2">Password</Text>
        <TouchableOpacity className="bg-white border border-gray-300 p-5 rounded-lg items-center">
          <Text className="text-gray-500">Change Password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="bg-[#26A69A] py-4 rounded-2xl mb-5 items-center mt-auto">
        <Text className="text-white text-lg">Save Changes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}