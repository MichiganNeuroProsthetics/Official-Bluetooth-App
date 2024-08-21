import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function Speech() {
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [transcriptionReady, setTranscriptionReady] = useState(false);
  const [transcription, setTranscription] = useState();
  // const [uri, setUri] = useState("");

  async function startRecording() {
    try {
      if (permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(recordingOptions);
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync(
      {
        allowsRecordingIOS: false,
      }
    );
    const uri = recording.getURI();
    console.log("Got recording URI");
    console.log(uri)

    const filetype = uri.split(".").pop();
    console.log(filetype)
    const filename = uri.split("/").pop();

    const formData = new FormData();
    formData.append(
      "audio",
      {
        uri,
        type: `audio/${filetype}`,
        name: filename,
      }
    );
    console.log("Created formData with recording");

    console.log("trying fetch now");

    // needs to be the second URL from the terminal when you start running the server
    fetch("{Insert URL here}/transcribe/", {method: "POST", body: formData})
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setTranscription(json);
      setTranscriptionReady(true);
      // console.log(json.transcription);
      console.log(transcription.transcription);
    })
    .catch((e) => console.log(e))
  }

  return (
    transcriptionReady ? 
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.updateButton} onPress={recording ? stopRecording : startRecording}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.descriptionContainer}>
          <Text style={styles.transcriptionText}>You said: {transcription.transcription}</Text>
        </View>
      {/* <Button
        title="Reset Permissions"
        onPress={() => { Linking.openURL('app-settings:') }}
      >
      Reset Permissions
      </Button> */}
      </View>
    </View>
    :
    <View style={styles.container}>
      <View style={styles.card}>
      <TouchableOpacity style={styles.updateButton} onPress={recording ? stopRecording : startRecording}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}

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

const styles = StyleSheet.create({
  container: {
    padding: 25, 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: 180,
    width: 310,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  updateButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 75,
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    shadowColor: 'rgba(0,0,0, .25)', // IOS
    shadowOffset: { height: 2, width: 0 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 30,
    margin: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transcriptionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descriptionContainer: {
    margin: 20,
  },
});