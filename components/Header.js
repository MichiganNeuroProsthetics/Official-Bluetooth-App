import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <SafeAreaView style={{marginLeft:15}}>
      <Text style={{fontWeight: 'bold', fontSize:22}}>
      {props.name}
      </Text>
    </SafeAreaView>
  )
}

export default Header