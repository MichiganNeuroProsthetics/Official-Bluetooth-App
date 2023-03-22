import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, FlatList} from 'react-native'
import Header from "../components/Header"
import TabBar from '../components/TabBar'
import { Divider } from 'react-native-elements'
import {images} from '../constants'

const {width, height } = Dimensions.get('screen');
const data = [
 "https://raw.githubusercontent.com/erjiayu/MNP-App/main/Asset.png",
 "https://raw.githubusercontent.com/erjiayu/MNP-App/main/Asset.png",
 "https://raw.githubusercontent.com/erjiayu/MNP-App/main/Asset.png"
//   images.card,
//   images.card,
];
// const cardWidth = width * 0.3
// const cardHeight = height * 0.5
const Test = () => {
  return (
    <SafeAreaView style = {{background:'black'}}>
        <Text style = {styles.title}>
            Welcome Back, User
        </Text>
      {/* <FlatList
        data = {data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem = {({uri:item}) => {
          return <View>  */}
            <Image source = {images.card} style=
                {styles.image}
            //   width: cardWidth,
            //   height: cardHeight,
            //   resizeMode: "cover"
            />
            {/* </View>
        }} */}
        {/* /> */}
    </SafeAreaView>
    // <SafeAreaView style = {{alignItem: 'center', justifyContent: 'center'}}>
    //   <Text style = {styles.title}>
    //     Welcome Back, User
    //   </Text>

    // </SafeAreaView>
  )
}

export default Test
const styles = StyleSheet.create({
  image: {
    // flex: 1,
    justifyContent: "center",
    width: "50%",
    height: "50%",
    resizeMode: "cover"
    // transform: [{ rotate: '45deg' }]
  }, 
  title: {
    fontSize: 26,
    fontWeight: 'bold'
  }
})