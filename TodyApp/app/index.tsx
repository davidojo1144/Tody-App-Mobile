import { Text, View,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css"

export default function Index() {
  return (
   <SafeAreaView className="flex-1 bg-teal-600" edges={["top", "left", "right"]}>
      <View>
        <Image source={require("../assets/images/Logo Onboarding.png")}/>
        <Text></Text>
        <Text></Text>
      </View>
   </SafeAreaView>
  );
}
