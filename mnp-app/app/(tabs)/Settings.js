import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Settings = () => {

    return (
      <View style={styles.container}>
        <View style={styles.card}>

          <TouchableOpacity style={styles.updateButton}>
            <Icon icon = "wrench" text = "update" />
            <View style={styles.textContainer}>
              <Text style={styles.text}>New Update</Text>
              <Text style={styles.text}>V3.1.5</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.descriptionContainer}>
            <Text>Description of new update.</Text>
          </View>
        </View>

        <View style={styles.patternCard}>
          <View style={styles.titleContainer}>
            <Icon icon = "hand-point-right" text = "update"/>
            <Text style={styles.titleText}>Flexing Patterns</Text>
          </View>

          <View style={styles.patternContainer}>
            <TouchableOpacity style={styles.patternButton}>
              <Text style={styles.bodyText}>Pattern 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.patternButton}>
              <Text style={styles.bodyText}>Pattern 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.patternButton}>
              <Text style={styles.bodyText}>Pattern 3</Text>
            </TouchableOpacity>
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
    backgroundColor: 'rgb(99, 172, 232)',
  },
  card: {
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: 180,
    width: 310,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
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
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 30,
    margin: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    margin: 20,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',    
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  patternCard: {
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: 220,
    width: 350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  patternContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  patternButton: {
    backgroundColor: 'white',
    margin: 10,
    height: 120,
    width: 90,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    shadowColor: 'rgba(0,0,0, .25)', // IOS
    shadowOffset: { height: 1, width: 0 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
  },
  bodyText: {
    fontSize: 16
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