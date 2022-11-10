import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import ButtonComp from '../components/Button-comp';

const User = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ marginHorizontal: 16 }}>
        <ButtonComp
          btnText="Tips"
          onClick={() => navigation.navigate("Tips")}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  btnStyle: {
    backgroundColor: 'black',
    height: 42,
    width: '100%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default User;
