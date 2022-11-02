import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native'
// import background from '../constants/images'
// import mosaic from '../constants/images'
// const background = {uri: "https://raw.githubusercontent.com/tranhonghan/images/main/crystal_background.jpeg"}
const background = {uri: "https://raw.githubusercontent.com/erjiayu/MNP-App/main/og-mosaicgradient.png"}
const Test = () => {
  return (
    <ImageBackground 
        source={background}
        resizeMode="cover"
        style = {styles.image}>
        {/* <View > */}
          {/* <Text style = {styles.title}>
            Welcome Back, User
          </Text> */}
        {/* </View> */}
      </ImageBackground>
  )
}

export default Test
const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center",
      width: "100%",
      height: "100%"
    }, 
    title: {
      fontSize: 26,
      fontWeight: 'bold'
    }
  })