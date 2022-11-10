import React, {Component, useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import DropDown from '../components/Tips-dropdown';

let tips_options = [{
  id: 1,
  name: "App"
},{
  id: 2,
  name: "Arm"
},
]

let tips_list = [{
  id: 1,
  name: "Tip 1",
  label: "App"

}, {
  id: 2,
  name: "Tip 2",
  label: "Arm",
}, {
  id: 3,
  name: "Tip 3",
  label: "Arm",
}, {
  id: 4,
  name: "Tip 4",
  label: "App",
}
]

const Tips = () => {
  const [selectedItem, setSelectedItem] = useState(tips_options[0])

  const onSelect = (item) => {
    setSelectedItem(item)
  }

  return (
    <SafeAreaView>
      <DropDown
        value={selectedItem}
        optionData={tips_options}
        onSelect={onSelect}
        tipsData={tips_list}
      />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {

  }
})

export default Tips