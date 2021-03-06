import React, { Component } from 'react';
import { StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Loading } from '../Loading';
import { width, height } from '../../constants/Layout';

export default class ImageList extends Component {
  constructor(){
    super();
    this.state = {
      loading: false,
      data: [],
      url: ''
    }
  }

  getImage () {
    this.setState({loading: true})
    fetch(this.state.url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.sprites,
          loading: false
        })
      })
  }

  componentWillMount () {
    this.setState({url: this.props.url})
  }

  componentDidMount () {
    this.getImage();
  }

  render() {

    if (this.state.loading) {
      return( <Loading size={'small'} /> )
    }
    return (
      <Image style={styles.imgFluid} source={{uri: this.state.data.front_default}} />
    )
  }
}

const styles = StyleSheet.create({
  imgFluid: {
    width: width * 0.2,
    height: height * 0.113
  }
})