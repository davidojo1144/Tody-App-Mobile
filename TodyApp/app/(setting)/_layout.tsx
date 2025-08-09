import { Stack } from "expo-router";

export default function SettingLayout() {
    return (
        <Stack>
            <Stack.Screen name="profileSetting" options={{headerShown: false}} />
            <Stack.Screen name="account" options={{headerShown: false}} />
            <Stack.Screen name="appIcon" options={{headerShown: false}} />
            <Stack.Screen name="helpCenter" options={{headerShown: false}} />
            <Stack.Screen name="productivity" options={{headerShown: false}} />
            <Stack.Screen name="theme" options={{headerShown: false}} />
        </Stack>
    )
}