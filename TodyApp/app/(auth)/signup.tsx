import { Text, View, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { formData } from "@/types/type";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState<formData>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          router.push("/chooseTheme");
        }
      } catch (err) {
        console.error("Error checking token:", err);
      }
    };

    checkToken();
  }, []);

  const handleLogin = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          expiresInMins: 30,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Check if token exists before storing
      if (!data.token) {
        throw new Error("No token received from server");
      }

      await AsyncStorage.setItem("authToken", data.token);
      console.log("Login successful:", data);
      setIsLoading(false);
      router.push("/chooseTheme");
    } catch (err: any) {
      console.error("Error details:", err);
      setError(err.message || "An error occurred");
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
      <View className="flex-1">
        <Text className="text-3xl text-black font-medium text-center">Welcome Back</Text>
        <Text className="text-md text-gray-500 font-medium text-center mt-3">
          Log in to your account
        </Text>

        {error && <Text className="text-red-500 text-center mt-3">{error}</Text>}

        <View className="flex flex-col gap-3 mt-10">
          <Text className="text-xl text-black font-medium">Username</Text>
          <TextInput
            textContentType="username"
            className="p-5 bg-gray-50 border border-gray-300 rounded-md"
            placeholder="Enter your username (e.g., emilys)"
            placeholderTextColor="gray"
            value={formData.username}
            onChangeText={(text) => setFormData({ ...formData, username: text })}
            autoCapitalize="none"
            editable={!isLoading}
          />
        </View>

        <View className="flex flex-col gap-3 mt-3">
          <Text className="text-xl text-black font-medium">Password</Text>
          <View className="relative">
            <TextInput
              textContentType="password"
              secureTextEntry={!isPasswordVisible}
              className="p-5 pr-12 bg-gray-50 border border-gray-300 rounded-md"
              placeholder="Enter your password (e.g., emilyspass)"
              placeholderTextColor="gray"
              value={formData.password}
              onChangeText={(text) => setFormData({ ...formData, password: text })}
              editable={!isLoading}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: [{ translateY: -12 }],
              }}
              disabled={isLoading}
            >
              <Ionicons
                name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        className={`bg-teal-500 py-5 rounded-2xl justify-center items-center mb-5 ${
          isLoading ? "opacity-50" : ""
        }`}
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : (
          <Text className="text-white text-xl font-medium">Log In</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}