import React, { Component, useState } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DropDown = ({
    optionData = [],
    value = {},
    tipsData = {},
    onSelect = () => { }
}) => {
    console.log("TipsData", tipsData)
    const [showOption, setShowOption] = useState(false)

    const onSelectedItem = (val) => {
        setShowOption(false)
        onSelect(val)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.dropDownStyle}
                activeOpacity={0.8}
                onPress={() => setShowOption(!showOption)}
            >
                <Text style={styles.selectedTextStyle}>{
                    !!value ? value?.name : 'Choose an option'}</Text>
                <Ionicons
                    name="chevron-down-outline"
                    size={30}
                    style={{
                        tansform: [{ rotate: showOption ? "0deg" : "270deg" }],

                    }} />

            </TouchableOpacity>
            {showOption && (<View>
                {optionData.map((val, i) => {
                    return (
                        <TouchableOpacity
                            key={String(i)}
                            onPress={() => onSelectedItem(val)}
                            style={{
                                backgroundColor: ((value != null) && (value.id == val.id)) ? '#D3D3D3' : 'white',
                                padding: 8,
                                minHeight: 42,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={styles.optionTextStyle}>{val.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>)}
            <View>
                <FlatList
                    data={tipsData.filter((item) => item.label == value.name)}
                    renderItem={({item}) => 
                    <Text
                    style={{
                        backgroundColor: 'white',
                        padding: 8,
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 8
                        
                    }}
                > {item.name} </Text>}
                    />
                {/* {tipsData.map((val, i) => printTip(val, i))} */}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    dropDownStyle: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 6,
        minHeight: 42,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    selectedTextStyle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    optionTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default DropDown;