import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { height, width } from '../../constants/Layout'
import ImageList from './ImageList';

export default class ItemList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageList url={this.props.item.url} />
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