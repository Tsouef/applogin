import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './App/Pages/Login'
import Signup from './App/Pages/Signup'



const AppLogin = StackNavigator({
  Login: {
    screen: Login,
    headerMode: 'none'
  },
  Signup: {
    screen: Signup
   }
  },
  { headerMode: 'none' }
);

AppRegistry.registerComponent('applogin', () => AppLogin)
