import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const { width, height } = Dimensions.get("window"); 

export default function welcome() {
    const router = useRouter()

  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
        <View className='flex flex-row items-center gap-2 pl-[20%] mt-10 mb-10'>
            <Text className='text-black text-2xl font-semibold '>Welcome to</Text>
            <Text className='text-teal-500 text-2xl font-semibold '>Todyapp</Text>
        </View>

        <Image
        source={require("../assets/images/welcome.png")}
        resizeMode='contain'
        style={{width: width * 0.9, maxHeight: height * 0.4}}
        />

        <TouchableOpacity className='bg-teal-500 flex flex-row justify-center items-center gap-3 mx-2  py-4 rounded-2xl' onPress={()=> router.push("/(auth)/login")}>
            <Image
            source={require("../assets/images/Message.png")}
            resizeMode='contain'/>
            <Text className='text-xl text-white font-medium'>Continue with email</Text>
        </TouchableOpacity>

        <View className='flex flex-row gap-2 items-center mt-5'>
            <View className='border border-gray-300 w-[35%] '></View>
            <Text className='text-md text-gray-500 fomt-thin'>or continue with</Text>
            <View className='border border-gray-300 w-[35%] '></View>
        </View>

        <View className='flex flex-row gap-3 mt-5'>
            <TouchableOpacity className='flex flex-row justify-center items-center gap-3 bg-gray-100 py-3 rounded-2xl w-[45%]'>
                <Image
                source={require("../assets/images/facebook.png")}
                resizeMode='contain'/>
                <Text className='text-xl text-black font-medium'>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity className='flex flex-row justify-center items-center gap-3 bg-gray-100 py-3 rounded-2xl w-[45%]'>
                <Image
                source={require("../assets/images/google.png")}
                resizeMode='contain'/>
                <Text className='text-xl text-black font-medium'>Google</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}