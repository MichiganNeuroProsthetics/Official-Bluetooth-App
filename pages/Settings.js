import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Settings = () => {
    return (
      <View style={styles.container}>
        <View style={styles.card}>

          <TouchableOpacity style={styles.updateButton}>
            <Icon icon = "wrench" text = "update" />
            <View style={styles.updateButtonTextContainer}>
              <Text style={styles.updateButtonText}>New Update</Text>
              <Text style={styles.updateButtonText}>V3.1.5</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.textContainer}>
            <Text>Description of new update.</Text>
          </View>

        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 25, 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: 200,
    width: 320,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 75,
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    shadowColor: 'rgba(0,0,0, .25)', // IOS
    shadowOffset: { height: 2, width: 0 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
  },
  updateButtonTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 30,
  },
  updateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    margin: 20,
  }
});

const Icon = (props) => (
  <View >
  <FontAwesome5 name = {props.icon} size = {25} style = {{
      marginBottom: 3, 
      alignSelf: "center"
  }} />
  {/* <Text>{props.text}</Text> */}
  </View>
);

export default Settings