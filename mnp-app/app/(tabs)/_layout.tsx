import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="line-chart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Speech"
        options={{
          title: 'Microphone',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="microphone" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="User"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}