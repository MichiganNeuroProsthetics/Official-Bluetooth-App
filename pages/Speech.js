import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function Sppech() {
    return (
        <View styles = { styles.container }>
            <TouchableOpacity>
                style = { styles.button }
                <Text style = { style.buttonText }>Start Listening</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        display: 'flex',
        borderRdius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        backgroundColor: 'blue'
    },
});
