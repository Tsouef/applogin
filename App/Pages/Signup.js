'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  ToolbarAndroid,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { Header,Title,Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

class Signup extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      email: '',
      password: '',
      loading: false
    }
  }

  signup() {
    this.setState({
      loading: true
    })
    console.log(this.props);
    this.props.firebaseApp.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password)
      .then(() => {
        alert('Votre compte a été créer');
        this.setState({
          email: '',
          password: '',
          loading: false
        })
        //TODO Redirect
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
    const content = this.state.loading ? <ActivityIndicator size="large"/> :
    <Content>
      <List>
        <ListItem>
          <InputGroup>
            <Icon name="ios-person" style={{ color: '#0A69FE' }} />
            <Input
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
              placeholder={"Adresse Email"} />
          </InputGroup>
        </ListItem>
        <ListItem>
          <InputGroup>
            <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
            <Input
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
              secureTextEntry={true}
              placeholder={"Mot de passe"} />
          </InputGroup>
        </ListItem>
      </List>
      <Button block success style={styles.buttonContainer} onPress={this.signup.bind(this)}>
        <Text>S inscrire</Text>
      </Button>
      <Button block error onPress={() => navigate('Login')}  style={styles.buttonContainer}>
        <Text>Aller à la home</Text>
      </Button>
    </Content>

    return (
      <Container>
        <Header>
          <Title>Page d Inscription</Title>
        </Header>
          {content}
      </Container>
    );
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
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
})

export default Signup;
