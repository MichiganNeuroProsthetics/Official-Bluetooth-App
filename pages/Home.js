import React from 'react'
import {StatusBar, View, Text, StyleSheet, SafeAreaView, Image, Dimensions, FlatList, Animated} from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import Header from "../components/Header"
import TabBar from '../components/TabBar'
import { Divider } from 'react-native-elements'
import {images} from '../constants'


const {width, height } = Dimensions.get('screen');
const data = [
  // 'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
  // 'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
  // 'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'
  "https://raw.githubusercontent.com/erjiayu/MNP-App/main/Asset.png",
  "https://raw.githubusercontent.com/erjiayu/MNP-App/main/Asset.png",
  "https://raw.githubusercontent.com/erjiayu/MNP-App/main/Asset.png",
  // images.card,
  // images.card,
  // images.card
];

  //   id: 1,
  //   name: 'Modes',
  //   component: images.card
  // },
  // {
  //   id: 2,
  //   name: 'Battery',
  //   component: images.card
  // },
  // {
  //   id: 3,
  //   name: 'Blank',
  //   component: images.card
  // }];

const cardWidth = width * 0.9
const cardHeight = height * 0.6
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
            <Image source = {{uri:item}} style={styles.card}/>
            </View>
        }}
        />
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
    width: cardWidth,
    height: cardHeight,
    resizeMode: "contain",
    marginLeft: 7,
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
    height: cardHeight,
    justifyContent: "center",
    alignItems: "center",
    resizeMode:"contain",
  },
  banner:{
    // flex: 1,
    height: height * 0.20,
    width: width,
    backgroundColor: "white",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  }
})