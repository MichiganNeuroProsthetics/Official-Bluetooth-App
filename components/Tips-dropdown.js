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
                                fontSize: 40,
                                fontWeight: 'bold',
                                borderRadius: 20,
                                marginHorizontal: 20,
                                opacity: 0.8,
                                justifyContent: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
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
                    renderItem={({ item }) =>
                        <Text style={styles.tipsTextStyle}>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                }}
                            >   {item.name}
                            </Text>
                            <Text>
                                {"\n\n"}
                                {item.description}
                            </Text>
                        </Text>}
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
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        minHeight: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
        marginHorizontal: 20,
        opacity: 0.8,
    },
    selectedTextStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        borderRadius: 20,
        marginHorizontal: 20,
        opacity: 0.8,
    },
    optionTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomLeftRadius: 20,
        borderBottomEndRadius: 20,
        marginHorizontal: 20,
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8
    },
    tipsTextStyle: {
        backgroundColor: 'white',
        padding: 8,
        justifyContent: 'center',
        fontSize: 18,
        marginTop: 8,
        borderRadius: 20,
        height: 200,
        marginHorizontal: 30,
    }
});

export default DropDown;