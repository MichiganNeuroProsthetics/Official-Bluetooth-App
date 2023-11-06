import * as React from "react";
import { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Modal, Alert} from "react-native";
import { Audio } from 'expo-av'
// import * as Permissions from 'expo-permissions'

startRecording = async () => {
    // const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    // if (status !== 'granted') return;
    try {
        console.log("requesting permissions");
        await Audio.getPermissionsAsync();
        console.log("permissions requested");
    } catch (error) {
        console.log(error);
    }
  
    //this.setState({ isRecording: true });
    // some of these are not applicable, but are required
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: true,
  
    });
    const user_audio = new Audio.Recording();
    try {
      await user_audio.prepareToRecordAsync(recordingOptions);
      await user_audio.startAsync();
    } catch (error) {
      console.log(error);
      this.stopRecording();
    }
    this.recording = user_audio;
};

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
                        <Text style={styles.modalButtonText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => startRecording()}
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
        backgroundColor: 'white',
    },
    buttonText: {
        color: 'blue',
        fontSize: 18,
    },
    modalButtonText: {
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

const recordingOptions = {
    // android not currently in use, but parameters are required
    android: {
        extension: '.m4a',
        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
    },
    ios: {
        extension: '.wav',
        audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
        sampleRate: 44100,
        numberOfChannels: 1,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
};
