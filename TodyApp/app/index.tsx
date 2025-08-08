import { Text, View,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css"

export default function Index() {
  return (
   <SafeAreaView className="flex-1 bg-teal-600 p-5" edges={["top", "left", "right"]}>
      <View className="flex flex-cols justify-center items-center pt-[40%]">
        <Image source={require("../assets/images/Logo Onboarding.png")}/>
        <Text className="text-white text-3xl  font-semibold pb-5">Todyapp</Text>
        <Text className="text-white text-md font-light">The best to do list application for you</Text>
      </View>
   </SafeAreaView>
  );
}
