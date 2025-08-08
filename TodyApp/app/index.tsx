import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Swiper from "react-native-swiper";
import "../global.css";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-teal-600" edges={["top", "left", "right"]}>
      <Swiper
        loop={false}
        //showsPagination={true}
        renderPagination={(index, total) => (
          <View className="absolute bottom-10 w-full flex-row justify-center">
            <View className="h-2 w-2 mx-1 rounded-full bg-white" />
            <View className="h-2 w-2 mx-1 rounded-full bg-white/50" />
            <View className="h-2 w-2 mx-1 rounded-full bg-white/50" />
          </View>
        )}
        onIndexChanged={(index) => {
          if (index === 1) {
            router.push("/onboarding2");
          } return
        }}
      >
        <View className="flex-1 p-5">
          <View className="flex flex-col justify-center items-center pt-[40%]">
            <Image source={require("../assets/images/Logo Onboarding.png")} />
            <Text className="text-white text-3xl font-semibold pb-5">Todyapp</Text>
            <Text className="text-white text-md font-light text-center">
              The best to do list application for you
            </Text>
          </View>
        </View>
        <View />
        <View />
      </Swiper>
    </SafeAreaView>
  );
}