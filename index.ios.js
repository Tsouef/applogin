import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
} from 'react-native';
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import Login from './App/Pages/Login';
import Signup from './App/Pages/Signup';
import Account from './App/Pages/Account';
import SplashScreen from './App/Pages/SplashScreen';
import QrView from './App/Pages/QrView';
import Formulaire from './App/Pages/Formulaire';
import Groupe from './App/Pages/Groupe';
import SearchMail from './App/Pages/SearchMail';

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
        this.setState({openingPage: 'Main'});
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

const TabLogin = TabNavigator({
  QrView: {
    screen: QrView,
  },
  Formulaire: {
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

const AppLogin = StackNavigator({
  App: {
    screen: App,
    header: null,
  },
  Account: {
    screen: Account
  },
  Login: {
    screen: Login,
    header: null,
    navigationOptions: {
        header: null
    }
  },
  Signup: {
    screen: Signup,
    header: null,
    navigationOptions: {
        header: null
    }
  },
  SearchMail: {
    screen: SearchMail
  },
  Main: {
    screen: TabLogin
  }
});

AppRegistry.registerComponent('applogin', () => AppLogin)
