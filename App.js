import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { width } from './src/constants/Layout';
// Screens
import Home from './src/Home';
import ListPokemon from './src/components/pokemons/ListPokemon';
import ModalView from './src/components/ModalView';
// Navigation
const stackPokemon = createStackNavigator(
  {
    Pokemons: ListPokemon,
    Pokemon: ModalView
  },
  {
    initialRouteName: 'Pokemons'
  }
)

const drawerNavigator = createDrawerNavigator(
  {
    Home: { screen: Home },
    Pokemon: { screen: stackPokemon }
  },
  {
    initialRouteName: 'Home',
    drawerWidth: width * 0.66,
    drawerType: 'slide',
    drawerBackgroundColor: '#91da71'
  }
);
const DrawerNavigation = createAppContainer(drawerNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return ( <DrawerNavigation /> );
  }
}