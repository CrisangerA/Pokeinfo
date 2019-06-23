import React from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Colors, height } from '../constants/Layout';

export function Loading(props) {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
      <ActivityIndicator size={this.props.size} /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: Colors.Black,
    fontSize: height * 0.05
  }
});