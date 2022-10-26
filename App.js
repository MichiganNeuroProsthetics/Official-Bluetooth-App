import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabBar from './components/TabBar';

//Import Screens
import Home from "./pages/Home";
import Settings from './pages/Settings';
import Speech from './pages/Speech';
import User from './pages/User';
import Analytics from './pages/Analytics';
import Header from './components/Header';
// Screen Names
const homeName = 'Home';
const userName = 'User';
const speechName = 'Speech';
const settingsName = 'Settings';
const dataName = 'Analytics';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#ffffff',
            shadowColor: '#000',
            elevation: 25,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <Ionicons
              name="person-circle-outline"
              size={25}
              style={{ alignSelf: "center" }} />
          ),
        }}
      >
        <Stack.Screen
          name={homeName} component={Home}
          options={{ headerTitle: () => <Header name={homeName} /> }} />
        <Stack.Screen
          name={userName} component={User}
          options={{ headerTitle: () => <Header name={userName} /> }} />
        <Stack.Screen
          name={speechName} component={Speech}
          options={{ headerTitle: () => <Header name={speechName} /> }} />
        <Stack.Screen
          name={settingsName} component={Settings}
          options={{ headerTitle: () => <Header name={settingsName} /> }} />
        <Stack.Screen
          name={dataName} component={Analytics}
          options={{ headerTitle: () => <Header name={dataName} /> }} />
      </Stack.Navigator> */}
        <Tab.Navigator


          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            // headerShown: false,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: '#313639',
            tabBarStyle: [
              {
                display: "flex",
                paddingTop: 10,
                height: 80
                // labelStyle: { paddingBottom: 10, fontSize: 10 },
                // style: { paddingTop: 10, height: 80}
              },
              null
            ],
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
              } else if (rn === userName) {
                iconName = focused ? 'person' : 'person-outline';
              } else if (rn === speechName) {
                iconName = focused ? 'mic' : 'mic-outline';
              } else if (rn === settingsName) {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (rn === dataName) {
                iconName = focused ? 'analytics-sharp' : 'analytics-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >

          <Tab.Screen name={homeName} component={Home} />
          <Tab.Screen name={userName} component={User} />
          <Tab.Screen name={speechName} component={Speech} />
          <Tab.Screen name={settingsName} component={Settings} />
          <Tab.Screen name={dataName} component={Analytics} />

        </Tab.Navigator>
      </NavigationContainer>
    
  );
}


