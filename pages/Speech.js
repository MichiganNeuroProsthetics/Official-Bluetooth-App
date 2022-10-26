import * as React from "react";
import { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Modal, Alert} from "react-native";

export default function Speech() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <><Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            } }>
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Listening now!</Text>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.buttonText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Start Listening</Text>
            </TouchableOpacity>
        </View></>
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
        color: 'white',
        fontSize: 18,
    },
    modalView: {
        width: '70%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 18,
    },
    modalButton: {
        width: 80,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
