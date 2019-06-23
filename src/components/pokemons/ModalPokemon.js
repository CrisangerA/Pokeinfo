import React, { Component } from 'react';
import { Text, Modal, Button, StyleSheet, View } from 'react-native';

export default class ModalPokemon extends Component {
  render() {
    return (
      <Modal animationType="fade" visible={false}>
        <View style={styles.container}>
          <Text> Screen Modal </Text>
          <Text> Modal for every views </Text>
          <Button title="Ok" />
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});