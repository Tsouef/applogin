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
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#EAEBED',
    activeBackgroundColor: '#01A7C2'
  },
});

export default App;
