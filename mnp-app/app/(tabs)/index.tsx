import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions, Animated} from 'react-native'

const {width, height } = Dimensions.get('screen');
const data = [
  {
    id: 1,
    name: 'Modes',
    component: "https://raw.githubusercontent.com/erjiayu/MNP-App/main/Asset.png",
  },
  {
    id: 2,
    name: 'Battery',
    component: "https://raw.githubusercontent.com/erjiayu/MNP-App/main/Asset.png",
  },
  {
    id: 3,
    name: 'Blank',
    component: "https://raw.githubusercontent.com/erjiayu/MNP-App/main/Asset.png",
  }];

const CARDWIDTH = width * 0.85
const CARDHEIGHT = height * 0.6
const DOTSIZE = 10
const DOT_SPACING = 10
const DOT_IND_SIZE = DOTSIZE 

const Home = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style = {styles.container}>
      <View style = {styles.banner}>
        <Text style = {[styles.greeting,{textAlign: 'right'}]}>
          Welcome Back, 
        </Text>
        <Text style = {[styles.user,{textAlign: 'right'}]}>
          User
        </Text>
      </View>
      <Animated.FlatList
        data = {data}
         onScroll = {Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true}
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem = {({item}) => {
          return <View style = {styles.carousel}> 
            <Image source = {{uri:item.component}} style={styles.card}/>
            </View>
        }}
        />
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height
  },
  card: {
    flex: 1,
    justifyContent: "center",
    // width: "80%",
    // height: "50%",
    width:  CARDWIDTH,
    height: CARDHEIGHT,
    resizeMode: "contain",
    // marginLeft: 
    // transform: [{ rotate: '45deg' }]
  }, 
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginHorizontal: 55,
    paddingTop: 70
  },
  user: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginHorizontal: 55,
  },
  carousel: {
    flex: 2,
    width:width,
    height: CARDHEIGHT,
    justifyContent: "center",
    alignItems: "center",
    resizeMode:"contain",
    paddingTop: 20,
    // paddingHorizontal: 20

  },
  banner:{
    // flex: 1,
    height: height * 0.20,
    width: width,
    backgroundColor: "white",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  pagination:{
    position: 'absolute',
    top: CARDHEIGHT * 0.27,
    flexDirection: "row"
    // left: width * 0.5
  },
  dots:{
    width: DOTSIZE,
    height: DOTSIZE,
    borderRadius: DOTSIZE,
    backgroundColor: 'hsla(0, 0%, 90%, 0.5)',
    margin: DOT_SPACING,
    // borderRadius: DOT_IND_SIZE,
    // borderWidth: 1,
    borderColor: "white",
    // position: 'absolute',
  },
  indicator:{
    width: DOT_IND_SIZE,
    height: DOT_IND_SIZE,
    borderRadius: DOT_IND_SIZE,
    backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: "#333",
    position: 'absolute',
    // top: -DOTSIZE /2,
    // bottom: -DOTSIZE /2,
  },
  dotsContainer: {
    // top: 50,
    position: 'absolute',
    marginBottom: CARDHEIGHT * 0.6

  },
  slidingDots: {
    // justifyContent: 'center',
    // alignSelf: 'center',
    // inactiveDotOpacity: 0.9,
    backgroundColor: 'white',
  },
  paging: {
    backgroundColor: 'white',
  }
})