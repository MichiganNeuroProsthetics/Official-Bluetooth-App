import { View, Text, Button } from 'react-native'
import React from 'react'
import Header from "../components/Header"
import TabBar from '../components/TabBar'
import { Divider } from 'react-native-elements'
export default function Home() {
  return (
    <View>
      <Header/>
      <Divider width = {1}/>
      <TabBar/>
    </View>
  )
}