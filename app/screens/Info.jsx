import { Text, View, StyleSheet, TextInput, StatusBar } from 'react-native'
import React, { Component } from 'react'
// import { StatusBar } from 'expo-status-bar'

export class Info extends Component {
  render() {
    return (
        <>
        <StatusBar hidden/>
      <View style={styles.container}>
        <Text>Enter your name to continue</Text>
        <TextInput />
      </View>
        </>
    )
  }
}

const styles = StyleSheet.create({
    container : {

    }
})

export default Info