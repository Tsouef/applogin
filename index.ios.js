import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Login from './App/Pages/Login'
import Signup from './App/Pages/Signup'
import Account from './App/Pages/Main'
import SplashScreen from './App/Pages/SplashScreen'

import Firebase from "./App/includes/firebase/firebase";

Firebase.initialize();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openingPage: null
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('userData').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      let openingPage = { openingPage: 'Login' };
      if(user_data != null) {
        this.setState({openingPage: 'Account'});
      } else {
        this.setState(openingPage);
      }
    });
  }

  render() {
    if (this.state.openingPage) {
      this._navigateTo(this.state.openingPage)
    } else {
      return (
        <SplashScreen />
      )
    }
  }

  _navigateTo = (routeName: string) => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }
}

const AppLogin = StackNavigator({
  App: {
    screen: App,
    headerMode: 'none'
  },
  Account: {
    screen: Account,
    headerMode: 'none'
  },
  Login: {
    screen: Login,
    headerMode: 'none'
  },
  Signup: {
    screen: Signup,
    headerMode: 'none'
   }
  },
  { headerMode: 'none' }
);

AppRegistry.registerComponent('applogin', () => AppLogin)
