import React, {Component} from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

// Screens
import Home from './src/Home';
import ListPokemon from './src/components/pokemons/ListPokemon'
import ModalPokemon from './src/components/pokemons/ModalPokemon';

const pokemonStack = createStackNavigator(
  {
    Pokemon: ListPokemon,
    Modal: ModalPokemon
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