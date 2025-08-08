import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function welcome() {
  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>
        <View className='flex flex-row items-center gap-2 px-14 mt-10 mb-10'>
            <Text className='text-black text-3xl font-medium '>Welcome to</Text>
            <Text className='text-teal-500 text-3xl font-medium '>Todyapp</Text>
        </View>
        <Image
        source={require("../assets/images/welcome.png")}
        />
    </SafeAreaView>
  )
}