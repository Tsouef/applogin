import React,{ Component }  from 'react';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Formulaire from './Formulaire';
import Groupe from './Groupe';

const App = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Utilisateur: {
    screen: Formulaire,
  },
  Groupe: {
    screen: Groupe,
  }
}, {
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default App;
