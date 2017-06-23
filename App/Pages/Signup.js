'use strict';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';
import {
  InputGroup,
  Input,
  Text,
  Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation'
import * as firebase from "firebase";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      loading: false
    }
  }

  signup() {
    const {state} = this.props.navigation;

    this.setState({
      loading: true
    })
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password)
      .then(() => {
        //TODO Rajouter en plus du mail et du mot de passe plusieurs paramètres à l'utilisateur.
        //https://firebase.google.com/docs/database/web/read-and-write
        alert('votre compte a été créé avec succès');
        this.setState({
          email: '',
          password: '',
          loading: false
        })
        this._navigateTo('Login')

      })
      .catch((error) => {
        this.setState({
          loading: false
        });
      alert('Une erreur s\'est produite pendant la création du compte : ' + error.message) ;
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.form}>
          <InputGroup>
            <Icon name="user-circle" style={{color: '#FFFFFF'}} />
            <Input
              style={styles.input}
              onChangeText={(text) => this.setState({firstname: text})}
              value={this.state.firstname}
              keyboardType="email-address"
              returnKeyType="next"
              placeholderTextColor='#FFFFFF'
              placeholder={"Prénom"}
            />
          </InputGroup>
          <InputGroup>
            <Icon name="user-circle" style={{color: '#FFFFFF'}} />
            <Input
              style={styles.input}
              onChangeText={(text) => this.setState({lastname: text})}
              value={this.state.lastname}
              returnKeyType="next"
              placeholderTextColor='#FFFFFF'
              placeholder={"Nom"}
            />
          </InputGroup>
          <InputGroup>
            <Icon name="envelope" style={{color: '#FFFFFF'}} />
            <Input
              style={styles.input}
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
            <Icon name="key" style={{color: '#FFFFFF'}} />
            <Input
              style={styles.input}
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
            <Button style={{backgroundColor: '#F44336'}} small rounded onPress={this.signup.bind(this)}>
              <Text>S inscrire</Text>
            </Button>
            <Button style={{backgroundColor: '#757575'}} small rounded onPress={() => navigate('Login')}>
              <Text>Aller à la home</Text>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
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
  input: {
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

export default Signup;
