import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import Tips from '../pages/Tips';
import User from '../pages/User';

const UserStack = createStackNavigator();

function UserStackScreen() {
  return (
    <UserStack.Navigator
    screenOptions={{
        headerShown: false
    }}>
      <UserStack.Screen name="User" component={User} />
      <UserStack.Screen name="Tips" component={Tips} />
    </UserStack.Navigator>
  );
};
export default UserStackScreen;