import * as React from 'react';
import {StyleSheet, Image, ImageBackground } from 'react-native'
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabBar from './components/TabBar';
import {images} from './constants';
//Import Screens
import Home from "./pages/Home";
import Settings from './pages/Settings';
import Speech from './pages/Speech';
import User from './pages/User';
import Analytics from './pages/Analytics';
import Bluetooth from './bluetooth/Bluetooth';
import Test from './pages/Test';
// Screen Names
const homeName = 'Home';
const userName = 'User';
const speechName = 'Speech';
const settingsName = 'Settings';
const dataName = 'Analytics';
const blueName = 'Bluetooth';

const Tab = createBottomTabNavigator();
// const background = {uri:"https://raw.githubusercontent.com/MichiganNeuroProsthetics/Official-Bluetooth-App/main/assets/mosaic.png"}

const transparentTheme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
  },
};

function App() {
  

  return (
    // <Test/>
    <ImageBackground 
    source={images.mosaic}
        resizeMode="cover"
        style = {styles.image}>
    <NavigationContainer theme = {transparentTheme}>
      {/* <Bluetooth /> */}
       <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerStyle: {

            height: 150,
            borderBottomLeftRadius: route.name === homeName ? 0 : 50,
            borderBottomRightRadius: route.name === homeName ? 0 : 50,
            backgroundColor: '#ffffff',
            elevation: 25,
          },
          // headerStyle: {route.name == homeName ? styles.homeHeader: styles.otherHeader},
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerLeft: () => (
            <Ionicons
              name="person-circle-outline"
              size={45}
              style={{ alignSelf: "center" }} />
          ),
          headerRight: () => (
            <Ionicons
              name="battery-half-sharp"
              size={45}
              style={{ alignSelf: "center" }} />
          ),

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
            } else if (rn === blueName) {
              iconName = focused ? 'bluetooth' : 'bluetooth-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })
      }
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'black',
        //   labelStyle: { paddingBottom: 10, fontSize: 10 },
        //   style: { paddingTop: 10, height: 80}
        // }}
        >

        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={userName} component={User} />
        <Tab.Screen name={speechName} component={Speech} />
        <Tab.Screen name={settingsName} component={Settings} />
        <Tab.Screen name={dataName} component={Analytics} />
        <Tab.Screen name={blueName} component={Bluetooth} />

      </Tab.Navigator>
    </NavigationContainer>
    </ImageBackground>
    
  );
}
export default App;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    // transform: [{ rotate: '45deg' }]
  }, 
  title: {
    fontSize: 26,
    fontWeight: 'bold'
  }
})

