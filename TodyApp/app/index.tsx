import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import "../global.css";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-teal-600 p-5" edges={["top", "left", "right"]}>
      <View className="flex flex-col justify-center items-center pt-[40%]">
        <Image source={require("../assets/images/Logo Onboarding.png")} />
        <Text className="text-white text-3xl font-semibold pb-5">Todyapp</Text>
        <Text className="text-white text-md font-light text-center">
          The best to do list application for you
        </Text>
        <TouchableOpacity
          className="mt-10 bg-white/20 py-5 rounded-2xl w-1/2"
          onPress={() => router.push("/onboarding2")}
        >
          <Text className="text-white text-xl text-center">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}