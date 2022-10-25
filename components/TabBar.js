import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function TabBar() {
  return (
    // <Tab.Navigator
    //   tabBarOptions={{
    //     showLabel: false,
    //     style: {
    //       position: 'absolute',
    //       height: 90
    //     }

    //   }}

    //   >
    //   <Tab.Screen name="Home" component={}/>
    //   <Tab.Screen name="User" component={}/>
    //   <Tab.Screen name="Microphone" component={<Icon icon = "microphone" />}/>
    //   <Tab.Screen name="Gear" component={<Icon icon = "gear" />}/>
    //   <Tab.Screen name="Analytics" component={<Icon icon = "chart" />}/>
    // </Tab.Navigator>
    <View 
        style = {{
            flexDirection: "row",
            margin: 10, 
            marginHorizontal: 30, 
            justifyContent: "space-between"
        }}>
      <Icon icon = "home" text = "Home" />
      <Icon icon = "user" text = "Home" />
      <Icon icon = "microphone" text = "Home" />
      <Icon icon = "gear" text = "Home" />
      <Icon icon = "fa-solid fa-chart-simple" text = "Home" />
    </View>
  );
}

const Icon = (props) => (
    <View >
    <FontAwesome5 name = {props.icon} size = {25} style = {{
        marginBottom: 3, 
        alignSelf: "center"
    }} />
    {/* <Text>{props.text}</Text> */}
    </View>
);
