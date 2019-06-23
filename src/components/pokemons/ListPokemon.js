import React, { Component } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// Component
import ItemList from './ItemList';
import { Loading } from '../Loading'

export default class ListPokemon extends Component {
  constructor() {
    super();
    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon',
      loading: false,
      data: [],
      error: ''  
    }    
  }

  getPokemons() {
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
        this.setState({ error: 'Do no conection network' });
      });
  }

  componentDidMount() {
    this.getPokemons();
  }

  render() {
    if (this.state.loading) {
      return( <Loading size={'large'} /> );
    }
    return (
      <LinearGradient style={styles.container} colors={['#50c784', '#91da71']} >
        <FlatList
          numColumns={3}
          centerContent
          data={this.state.data}
          renderItem={({ item }) => <ItemList item={item} /> }
          keyExtractor={(item, index) => index.toString() }          
          ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
        />        
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20
    //paddingHorizontal: 10
  }
});