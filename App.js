import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';
import Home from './screens/Home'

const getFonts = () => Fonts.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

export default function App() {
  const[fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
      <Home />
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

});
