import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function Speech() {
    return (
        <View style = { styles.container }>
            <TouchableOpacity
                style = { styles.button }>
                <Text style = { styles.buttonText }>Start Listening</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 25, 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30%',
    },
    button: {
        display: 'flex',
        borderRadius: 40,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        backgroundColor: 'blue',
    },
    buttonText: {
        color: 'white'
    }
});
