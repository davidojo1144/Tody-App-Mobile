import { Tabs } from "expo-router";


export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{headerShown: true}}/>
            <Tabs.Screen name="inbox" options={{headerShown: true}}/>
            <Tabs.Screen name="filter" options={{headerShown: true}}/>
            <Tabs.Screen name="upcoming" options={{headerShown: true}}/>
            <Tabs.Screen name="project" options={{headerShown: true}}/>
        </Tabs>
    )
}