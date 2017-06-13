import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Login from './App/Pages/Login'
import Signup from './App/Pages/Signup'
import Account from './App/Pages/Main'

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
      console.log('OPEN');
      this._navigateTo(this.state.openingPage)
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.body}>
            <ActivityIndicator size="large" />
          </View>
        </View>
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
  Main: {
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

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: 'black',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#E8160C',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
})

AppRegistry.registerComponent('applogin', () => AppLogin)
