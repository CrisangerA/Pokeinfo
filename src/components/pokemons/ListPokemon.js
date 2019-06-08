import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, ActivityIndicator, Button } from 'react-native';
import ItemList from './ItemList';

export default class ListPokemon extends Component {
  constructor(){
    super();
    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon',
      loading: false,
      data: [],
      error: '',
      visible: false
    }
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  getPokemons () {
    this.setState({ loading: true });
    fetch(this.state.url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.results,
          loading: false
        })
      })
      .catch(err => {
        console.error(err);
        this.setState({error: 'Do no conection network'});
      });
  }

  componentDidMount () {
    this.getPokemons();
  }

  setModalVisible (visible) {
    this.setState({visible: visible})
  }

  render() {

    if (this.state.loading) {
      return <ActivityIndicator size="large" />
    }

    return (
      //<LinearGradient colors={['#50c784', '#91da71']} >
        <View style={styles.container}>
          <Text>Cosa</Text>
          <Text> List pokemon ...</Text>
          <Button title="Modal" onPress={() => this.props.navigation.navigate('Modal')} />
          <FlatList 
            numColumns={3}
            centerContent
            data={this.state.data} 
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <ItemList item={item} />}
            ItemSeparatorComponent={() => <View style={{height: 5}} />}
          />
        </View>
      //</LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  }
});