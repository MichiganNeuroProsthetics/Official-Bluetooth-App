import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonComp = ({
    btnText = '',
    btnStyle = {},
    onClick = () => { }
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                ...styles.btnStyle,
                ...btnStyle
            }}
            onPress={onClick}
        >
            <Text style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold'
            }}>{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: 'black',
        height: 42,
        width: '100%',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ButtonComp;