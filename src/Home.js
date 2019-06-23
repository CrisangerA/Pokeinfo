import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { height, Colors } from './constants/Layout'

export default class Home extends Component {
  render() {
    return (
      <LinearGradient style={styles.container} colors={['#50c784', '#91da71']}>
        <View style={styles.container}>
          <Text>Welcome to Pokeinfo</Text>
          <Text style={styles.text}> Home component prueba </Text>
        </View>
      </LinearGradient>
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
  title: {
    fontSize: height * 0.05,
    color: Colors.Black
  },
  text: {
    fontSize: height * 0.03
  }
});