import { Stack } from "expo-router";

export default function ProjectLayout() {
    return (
        <Stack>
            <Stack.Screen name="inProgress" options={{headerShown: false}}/>
            <Stack.Screen name="instructions" options={{headerShown: false}}/>
            <Stack.Screen name="manageProject" options={{headerShown: false}}/>
            <Stack.Screen name="tryBoard" options={{headerShown: false}}/>
        </Stack>
    )
}