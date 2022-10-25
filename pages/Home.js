import React from 'react'
import { View, Text, SafeAreaView  } from 'react-native'
import Header from "../components/Header"
import TabBar from '../components/TabBar'
import { Divider } from 'react-native-elements'
const Home = () => {
  return (
    <SafeAreaView style = {{alignItem: 'center', justifyContent: 'center'}}>
      <Text
      style = {{
        fontSize: 26,
        fontWeight: 'bold'
      }}>Home</Text>
    </SafeAreaView>
  )
}

export default Home