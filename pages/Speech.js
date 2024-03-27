import { useState } from 'react';
import { View, StyleSheet, Button, Linking } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';

export default function Speech() {
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
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
    // formData.append("language", selectedLangRef.current);
    // formData.append("model_size", modelOptions[selectedModelRef.current]);
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

    fetch("http://10.20.72.57:5000/transcribe/", {method: "POST", body: formData})
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json.transcription)
    })
    .catch((e) => console.log(e))


    // // Create a file name for the recording
    // const fileName = `recording-${Date.now()}.caf`;

    // // Move the recording to the new directory with the new file name
    // await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'recordings/', { intermediates: true });
    // await FileSystem.moveAsync({
    //   from: uri,
    //   to: FileSystem.documentDirectory + 'recordings/' + `${fileName}`
    // });

    // setUri(recordingUri);

    // // This is for simply playing the sound back
    // const playbackObject = new Audio.Sound();
    // await playbackObject.loadAsync({ uri: FileSystem.documentDirectory + 'recordings/' + `${fileName}` });
    // await playbackObject.playAsync();

    // console.log('Recording stopped and stored at', FileSystem.documentDirectory + 'recordings/' + `${fileName}`); 
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      <Button
        title="Reset Permissions"
        onPress={() => { Linking.openURL('app-settings:') }}
      >
      Reset Permissions
      </Button>
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
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});

// async function transcribeRecording() {
//   // TODO: get audio file from where it's stored
//   const recordingUri = uri
//   const filetype = uri.split(".").pop();
//   const filename = uri.split("/").pop();
  
//   const formData = new FormData();
//   // formData.append("language", selectedLangRef.current);
//   // formData.append("model_size", modelOptions[selectedModelRef.current]);
//   formData.append(
//     "audio_data",
//     {
//       uri,
//       type: `audio/${filetype}`,
//       name: filename,
//     },
//     "temp_recording"
//   );

//   axios({
//     url: "http://127.0.0.1:5000/transcribe/",
//     method: "POST",
//     data: formData,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "multipart/form-data",
//     },
//   })
//     .then(function (response) {
//       console.log("response :", response);
//       // setTranscribedData((oldData: any) => [...oldData, response.data]);
//       // setLoading(false);
//       // setIsTranscribing(false);
//       // intervalRef.current = setInterval(
//       //   transcribeInterim,
//       //   transcribeTimeout * 1000
//       // );
//     })
//     .catch(function (error) {
//       console.log("error : error");
//     });

//   // if (!stopTranscriptionSessionRef.current) {
//   //   setIsRecording(true);
//   // }
// }