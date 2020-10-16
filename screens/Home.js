import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'

function Home({ navigation }) {

  const pressHandler =() => {
    navigation.navigate('Details');
    // navigation.push('Details');
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='go to reviews' onPress={pressHandler}/>
    </View>
  )
}



export default Home
