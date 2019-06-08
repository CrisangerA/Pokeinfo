import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

// Constants
import { height, width } from '../../constants/Layout'

// Screens
import ImageList from './ImageList';
import ModalPokemon from './ModalPokemon';

export default class ItemList extends Component {
  constructor(){
    super();
    this.state = {
      modalVisible: false
    }
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible (visible) {
    this.setState({ modalVisible: visible })
  }

  render() {
    return (
      <View style={styles.container}>
        <ModalPokemon modalVisible={this.state.modalVisible} />
        <TouchableHighlight onPress={this.setModalVisible(true)}>
          <ImageList url={this.props.item.url} />
        </TouchableHighlight>
        <Text style={styles.text}> {this.props.item.name} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.33125
  },
  text: {
    fontSize: height * 0.03
  }
})

console.log('Height: ', height, ' Width: ', width);