import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export function ModalView(props) {
  return (
    <View style={styles.container}>
      <Text> textInComponent </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});