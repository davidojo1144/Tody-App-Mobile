import { Stack } from "expo-router";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function RootLayout() {
  const router = useRouter()

    useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          router.replace('/(project)/tryBoard');
        } else {
          router.replace("/");
        }
      } catch (err) {
        console.error("Error checking token:", err);
      }
    };

    checkToken();
  }, []);

  return <Stack>
    <Stack.Screen name="index" options={{headerShown: false}} />
    <Stack.Screen name="onboarding2" options={{headerShown: false}} />
    <Stack.Screen name="onboarding3" options={{headerShown: false}} />
    <Stack.Screen name="welcome" options={{headerShown: false}} />
    <Stack.Screen name="chooseTheme" options={{headerShown: false}} />
    <Stack.Screen name="task-list" options={{headerShown: false}} />
    <Stack.Screen name="(auth)" options={{headerShown: false}} />
    <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    <Stack.Screen name="(project)" options={{headerShown: false}} />
  </Stack>
}
