import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from './components/TabBar';
import Home from "./pages/Home";
export default function App() {
  return (
    // <NavigationContainer>
    //   <TabBar />
    // </NavigationContainer>
    <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
