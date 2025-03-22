import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')
const WIDTH = width
const HEIGHT = height

const User = () => {
  return (
    <View>

      <View style={styles.infoCard}>
        <Text>Name</Text>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  infoCard: {
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH,
    height: HEIGHT * 0.6,
    top: HEIGHT * 0.2,
  }
})

export default User