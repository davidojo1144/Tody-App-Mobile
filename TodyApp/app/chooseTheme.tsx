import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import "../global.css"
import { useRouter } from "expo-router";

export default function ChooseTheme() {
  return (
    <SafeAreaView className="flex-1 bg-white p-5" edges={["top", "left", "right"]}>

    </SafeAreaView>
  )
}