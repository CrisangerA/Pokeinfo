import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { width, height } from './constants/Layout'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Home component prueba </Text>
      </View>
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
  text: {
    fontSize: height * 0.03
  }
});