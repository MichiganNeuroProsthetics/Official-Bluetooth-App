import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native'
import Header from "../components/Header"
import TabBar from '../components/TabBar'
import { Divider } from 'react-native-elements'
const background = {uri:"https://raw.githubusercontent.com/erjiayu/MNP-App/main/og-mosaicgradient.png"}
// import background from '../constants/images'
const Home = () => {
  return (
    // <SafeAreaView style = {{alignItem: 'center', justifyContent: 'center'}}>
      <ImageBackground 
        source={background}
        resizeMode="cover"
        style = {styles.image}>
        <View >
          {/* <Text style = {styles.title}>
            Welcome Back, User
          </Text> */}
        </View>
      </ImageBackground>
    // </SafeAreaView>
  )
}

export default Home
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    width: "130%",
    height: "130%",
    transform: [{ rotate: '45deg' }]
  }, 
  title: {
    fontSize: 26,
    fontWeight: 'bold'
  }
})