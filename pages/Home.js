import React from 'react'
import {StatusBar, View, Text, StyleSheet, SafeAreaView, Image, Dimensions, FlatList, Animated} from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import Header from "../components/Header"
import TabBar from '../components/TabBar'
import { Divider } from 'react-native-elements'
import {images} from '../constants'
import { ScalingDot,
  SlidingBorder,
  ExpandingDot,
  SlidingDot } from 'react-native-animated-pagination-dots'


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
// const renderItems = ({item}) => {
//   return(
//     <View>
//       <Image source={images.card} />
//     </View>
//   )
// }

const Home = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  // const[index,setIndex] = useState(0);
  // const isCarousel = useRef(null);
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
      <View style = {styles.carousel}> 
      {/* <Image source = {images.card} style={styles.card}/> */}
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
        <View style={styles.paging}>
          <SlidingDot
            marginHorizontal={10}
            containerStyle={styles.dotsContainer}
            data={data}
            scrollX={scrollX}
            dotSize={12}
            dotStyle= {styles.slidingDots}
            slidingIndicatorStyle = {styles.slidingDots}
          />
          {/* <ExpandingDot
            data = {data}
            expandingDotWidth={30}
            scrollX={scrollX}
            inActiveDotColor={'#347af0'}
            activeDotColor={'#347af0'}
            inActiveDotOpacity={0.5}
            dotStyle={styles.slidingDots}
            containerStyle={styles.dotsContainer} */}
        {/* <View style={styles.pagination}>
          {data.map((_,index) => {
            return <View 
              key={index}
              style = {[styles.dots]}
            />
          })}
          <Animated.View style={[styles.indicator, {
                transform: [{
                  translateX: Animated.divide(scrollX, CARDWIDTH).interpolate({
                    inputRange: [0,1],
                    outputRange: [0,DOT_IND_SIZE]
                  })
                }]
              }]} /> */}
        </View>
      </View>
    </View>
    
  )
}
    // <View style = {{paddingTop: 200, alignItems: 'center'}}>
    //   <Carousel 
    //     ref= {isCarousel}
    //     data={data}
    //     renderItem={renderItem}
    //     sliderWidth={cardWidth}
    //     itemWidth = {cardWidth}
    //     onSnapToItem = {index => setIndex(index)}
    //     />
    //     <Pagination 
    //      dotsLength = {data.length}
    //      activeDotsIndex = {index}
    //      carouselRef = {isCarousel}
    //      dotStyle = {{
    //       width:10,
    //       height:10,
    //       borderRadius: 10,
    //       marginHorizontal: 8,
    //       backgroundColor: 'white'
    //      }}
    //      />
    // </View>
    //   )
    // }
    
     
    // <SafeAreaView style = {{alignItem: 'center', justifyContent: 'center'}}>
    //   

    // </SafeAreaView>


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
    inactiveDotOpacity: 0.9,
    backgroundColor: 'white',
  },
  paging: {
    backgroundColor: 'white',
  }
})