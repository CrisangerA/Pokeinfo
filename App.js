import React, {Component} from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

// Screens
import Home from './src/Home';
import ListPokemon from './src/components/pokemons/ListPokemon'

const pokemonStack = createStackNavigator(
  {
    Pokemon: ListPokemon
  }
)

const drawerNavigator = createDrawerNavigator(
  {
    Home: { screen: Home },
    Pokemon: { screen: pokemonStack }
  },
  {
    initialRouteName: 'Pokemon',
    defaultNavigationOptions: ({navigation}) => {
      const routeName = navigation.state.routeName;
      return {
        title: routeName
      }
    }
  }
)

const DrawerNavigation = createAppContainer(drawerNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return ( <DrawerNavigation /> );
  }
}