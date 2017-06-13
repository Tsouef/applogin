'use strict';
import React,{ Component }  from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
  View
} from 'react-native';
import { TabNavigator, NavigationActions } from 'react-navigation';


class Signup extends Component {
  constructor(props) {
    super( props );

    this.state = {
      loaded: true,
      email: '',
      password: '',
    }
  }

  async signup(email, password) {

    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, password);

        console.log("Account created");

        // Navigate to the Home page, the user is auto logged in

    } catch (error) {
        console.log(error.toString())
    }

}

  goToLogin(){
    const navigateAction = NavigationActions.navigate({
      routeName: 'Home',
      params: {},
      action: NavigationActions.navigate({ routeName: 'Home'})
    })

    this.props.navigation.dispatch(navigateAction)
  }

  render() {
     return (
       <View style={styles.container}>
         <StatusBar
           barStyle='light-content'
         />
         <TextInput
           placeholder="Nom d'utilisateur"
           placeholderTextColor="rgba(0,0,0,0.7)"
           returnKeyType="next"
           keyboardType="email-address"
           autoCapitalize="none"
           autoCorrect={false}
           onSubmitEditing={() => this.passwordInput.focus()}
           style={styles.input}
           onChangeText={(text) => this.setState({email: text})}
         />
         <TextInput
           placeholder="Mot de passe"
           placeholderTextColor="rgba(0,0,0,0.7)"
           returnKeyType="go"
           secureTextEntry
           style={styles.input}
           ref={(input) => this.passwordInput = input}
           onChangeText={(text) => this.setState({password: text})}

         />

         <TouchableOpacity style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}
             onPress={this.goToLogin.bind(this)}
           >
             Se connecter
           </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttonContainer}>
           <Text
             style={styles.buttonText}
             onPress={this.signup.bind(this)}
           >
             Créer un compte
           </Text>
         </TouchableOpacity>
       </View>
     )
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
