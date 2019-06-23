import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { height, width, Colors } from '../../constants/Layout';
// Screens
import ImageList from './ImageList';

export default class ItemList extends Component {
  constructor(){
    super();
    this.state = {
      url: '',
      name: ''
    }    
  }
  // Cambiar para que reciva los datos directamente desde las props
  componentWillMount() {
    this.setState({
      url: this.props.item.url,
      name: this.props.item.name
    });
  }

  render() {
    return (
      <View style={styles.container}>    
        <TouchableHighlight>
          <ImageList url={this.state.url} />
        </TouchableHighlight>        
        <Text style={styles.text}> {this.state.name} </Text>      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.33125,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: height * 0.03,
    color: Colors.Black
  }
});