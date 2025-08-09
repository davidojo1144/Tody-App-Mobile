import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import "../global.css";

export default function onboarding3() {
  const router = useRouter()

  return (
    <SafeAreaView className="flex-1 p-5 bg-white" edges={["top", "left", "right"]}>
      <View className="pb-10 flex flex-row justify-between items-center">
        <TouchableOpacity onPress={()=> router.back()}>
          <Ionicons  name="arrow-back-outline" size={28} color="teal" />
        </TouchableOpacity>
         <Text className="text-teal-400 text-right text-xl font-medium" onPress={() => router.push("/signup")}>Skip</Text>
      </View>
      <Image
      resizeMode="contain"
       source={require("../assets/images/Onboarding Image2.png")}/>
       {/* <Text className="text-4xl text-center text-black px-10 ">Find the practicality in making your todo list</Text>
       <Text className="pt-5 text-gray-500 text-xl font-light text-center">Here's a mobile platform that helps you create task or to list so that it can help you in every job easier and faster.</Text> */}
       <TouchableOpacity className="mt-20 bg-teal-500 py-5 rounded-2xl" onPress={()=> router.push("/welcome")}>
        <Text className="text-white text-xl text-center">Continue</Text>
       </TouchableOpacity>
    </SafeAreaView>
  )
}