import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native'
import Header from "../components/Header"
import TabBar from '../components/TabBar'
import { Divider } from 'react-native-elements'
const background = {uri:"https://raw.githubusercontent.com/MichiganNeuroProsthetics/Official-Bluetooth-App/main/assets/mosaic.png"}
const Home = () => {
  return (
    <SafeAreaView style = {{alignItem: 'center', justifyContent: 'center'}}>
      <Text style = {styles.title}>
        Welcome Back, User
      </Text>
    </SafeAreaView>
  )
}

export default Home
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