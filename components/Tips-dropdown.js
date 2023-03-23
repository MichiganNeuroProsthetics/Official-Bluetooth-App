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
                <Text style={styles.dropDownStyle}>{
                    !!value ? value?.name : 'Choose an option'}</Text>
                <Ionicons
                    name="chevron-up-outline"
                    size={30}
                    style={{
                        tansform: [{ rotate: showOption ? "0deg" : "270deg" }],
                        color: 'cornflowerblue'

                    }} />

            </TouchableOpacity>
            {showOption && (<View>
                {optionData.map((val, i) => {
                    if (value.id != val.id) {
                        return (
                            <TouchableOpacity
                                key={String(i)}
                                onPress={() => onSelectedItem(val)}
                                style={styles.optionTextStyle}
                            >
                                <Text style={styles.optionTextStyle}>{val.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                })}
            </View>)}
            <FlatList style={{
                scrollsToTop: false,
            }}
                contentContainerStyle={{ flexGrow: 1 }}
                data={tipsData.filter((item) => item.label == value.name)}
                renderItem={({ item }) =>
                    <View
                        style={styles.backgroundContainer}>
                        <View style={styles.tipsTextStyle}>
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
                            </Text>
                        </View>
                    </View>}
            />

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
        marginTop: 10,
        marginHorizontal: 20,
        opacity: 0.8,
        fontSize: 30,
        fontWeight: 'bold'
    },
    optionTextStyle: {
        backgroundColor: 'white',
        padding: 8,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        minHeight: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 20,
        opacity: 0.8,
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    tipsTextStyle: {
        backgroundColor: 'white',
        opacity: 1,
        padding: 15,
        minHeight: 175,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 30,
        borderRadius: 30,
        overflow: 'hidden',
        zIndex: 1,
        flex: 1
    },
    backgroundContainer: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginHorizontal: 20,
        flex: 1
    },
    tipsBackground: {
        backgroundColor: 'white',
        opacity: 1,
        marginHorizontal: 20,

    }
});

export default DropDown;