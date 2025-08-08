import { Tabs } from "expo-router";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


export default function TabsLayout() {
    return (
        <Tabs
         screenOptions={{
          headerStyle: { backgroundColor: '#f5f5f5' },
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: '#f5f5f5',
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            paddingTop: hp(1.5),
            marginBottom: hp(2)
          },
          tabBarActiveTintColor: 'teal',
          tabBarInactiveTintColor: '#666666',
        }}
        >
            <Tabs.Screen 
            name="home" 
            options={{
            headerShown: true,
             tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            )}}/>
            <Tabs.Screen 
            name="inbox" 
            options={{
            headerShown: true,
             tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles" size={size} color={color} />
            )}}/>
            <Tabs.Screen 
            name="filter" 
            options={{
            headerShown: true,
             tabBarIcon: ({ color, size }) => (
              <Ionicons name="filter" size={size} color={color} />
            )}}/>
            <Tabs.Screen 
            name="upcoming" 
            options={{
            headerShown: true,
             tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
            )}}/>
            <Tabs.Screen 
            name="project" 
            options={{
            headerShown: true,
             tabBarIcon: ({ color, size }) => (
              <Ionicons name="briefcase" size={size} color={color} />
            )}}/>
        </Tabs>
    )
}