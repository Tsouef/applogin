'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  AsyncStorage,
  View,
  ToolbarAndroid,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import {
  Header,
  Container,
  Title,
  Content,
  List,
  ListItem,
  InputGroup,
  Input,
  Icon,
  Text,
  Picker,
  Button
} from 'native-base';
import { NavigationActions } from 'react-navigation'
import * as firebase from "firebase";


class Login extends Component {
  constructor(props) {
    super(props);
    console.log(firebase);
    // We have the same props as in our signup.js file and they serve the same purposes.
    this.state = {
      loading: false,
      email: '',
      password: ''
    }
  }

  render() {
    const {navigate} = this.props.navigation;

    // The content of the screen should be inputs for a username, password and submit button.
    // If we are loading then we display an ActivityIndicator.
    const content = this.state.loading
      ? <View style={styles.container}>
          <ActivityIndicator size="large"/>
        </View>
      : <Content>
        <List>
          <ListItem>
            <InputGroup>
              <Icon name="ios-person" style={{
                color: '#0A69FE'
              }}/>
              <Input onChangeText={(text) => this.setState({email: text})} value={this.state.email} placeholder={"Adresse email"}/>
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Icon name="ios-unlock" style={{
                color: '#0A69FE'
              }}/>
              <Input onChangeText={(text) => this.setState({password: text})} value={this.state.password} secureTextEntry={true} placeholder={"Mot de passe"}/>
            </InputGroup>
          </ListItem>
        </List>

        <Button info block style={styles.buttonContainer} onPress={this.login.bind(this)}>
          <Text>Se connecter</Text>
        </Button>
        <Button success block onPress={() => navigate('Signup')} style={styles.buttonContainer}>
          <Text>Créer un utilisateur</Text>
        </Button>
      </Content>;

    // A simple UI with a toolbar, and content below it.
    return (
      <Container>
        <Header>
          <Title>Page de connexion</Title>
        </Header>
        {content}
      </Container>
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

export default Login;
