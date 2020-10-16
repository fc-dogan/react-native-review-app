import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigator } from "./routes/AppNavigator";

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <AppNavigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
