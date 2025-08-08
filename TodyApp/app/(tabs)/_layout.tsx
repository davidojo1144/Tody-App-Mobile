import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
              <MaterialCommunityIcons name="calendar-today" size={size} color={color} />
            )}}/>
            <Tabs.Screen name="inbox" options={{headerShown: true}}/>
            <Tabs.Screen name="filter" options={{headerShown: true}}/>
            <Tabs.Screen name="upcoming" options={{headerShown: true}}/>
            <Tabs.Screen name="project" options={{headerShown: true}}/>
        </Tabs>
    )
}