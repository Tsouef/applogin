'use strict';
import React, {Component} from 'react';
import {
  AsyncStorage,
  View,
  ActivityIndicator,
  StyleSheet,
  Image
} from 'react-native';
import {
  List,
  ListItem,
  InputGroup,
  Input,
  Icon,
  Text,
  Button
} from 'native-base';
import { NavigationActions } from 'react-navigation'
import * as firebase from "firebase";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: ''
    }
  }

  focusPasswordInput() {
      this._passwordInput._textInput.focus();
  }
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.display}>
          <Image style={styles.image} resizeMode={Image.resizeMode.center} source={require('../assets/images/logo.png')} />
        </View>
        <View style={styles.form}>
          <InputGroup>
            <Icon name="ios-person" style={{color: '#FFFFFF'}} />
            <Input
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
              keyboardType="email-address"
              onSubmitEditing={() => this._passwordInput.focus()}
              returnKeyType="next"
              placeholderTextColor='#FFFFFF'
              placeholder={"Adresse email"}
            />
          </InputGroup>
          <InputGroup>
            <Icon name="ios-unlock" style={{color: '#FFFFFF'}} />
            <Input
              ref = { ref => this._passwordInput = ref }
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
              returnKeyType="go"
              secureTextEntry={true}
              placeholderTextColor='#FFFFFF'
              placeholder={"Mot de passe"}
            />
          </InputGroup>
          <View style={styles.buttonContainer}>
            <Button style={{backgroundColor: '#F44336'}} small rounded onPress={this.login.bind(this)}>
              <Text>Se connecter</Text>
            </Button>
            <Button style={{backgroundColor: '#757575'}} small rounded onPress={() => navigate('Signup')}>
              <Text>Créer un utilisateur</Text>
            </Button>
          </View>
        </View>
       </View>
    );
  }

  login() {
    this.setState({loading: true});
    // Log in and display an alert to tell the user what happened.
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((userData) => {
      this.setState({loading: false});
      AsyncStorage.setItem('userData', JSON.stringify(userData));
      this._navigateTo('Main');
    }).catch((error) => {
      this.setState({loading: false});
      alert('Login Failed. Please try again' + error);
    });
  }

  _navigateTo = (routeName: string) => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#D32F2F',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  display:{
    alignItems: 'center',
  },
  image:{
    width: 200,
    height: 50,
    resizeMode: 'contain'
  },
  icons: {
    color: '#FFFFFF',
  },
  buttonContainer: {
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 30,
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#FFCDD2'
  }

})

export default Login;
