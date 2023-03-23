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
  description: "This is tip 1's text",
  label: "App"

}, {
  id: 2,
  name: "Tip 2",
  description: "This is tip 2's text",
  label: "Arm",
}, {
  id: 3,
  name: "Tip 3",
  description: "This is tip 3's text",
  label: "Arm",
}, {
  id: 4,
  name: "Tip 4",
  description: "This is tip 4's text",
  label: "App",
}, {
id: 5,
name: "Tip 5",
description: "This is tip 5's text",
label: "App"

}, {
id: 6,
name: "Tip 6",
description: "This is tip 6's text",
label: "Arm",
}, {
id: 7,
name: "Tip 7",
description: "This is tip 7's text",
label: "Arm",
}, {
id: 8,
name: "Tip 8",
description: "This is tip 8's text",
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