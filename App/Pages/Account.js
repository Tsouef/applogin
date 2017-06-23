'use strict';
import {
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ToolbarAndroid
} from 'react-native';
import React, {Component} from 'react';
import {
  Button,
  Picker
} from 'native-base';
import * as firebase from "firebase";
import { NavigationActions } from 'react-navigation'
import Login from './Login';
const Item = Picker.Item;


class Account extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profil',
  });

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      selected: 'key1',
      results: {
        items: []
      }
    }
  }

  componentWillMount() {
    // get the current user from firebase
    // const userData = this.props.firebaseApp.auth().currentUser;
    AsyncStorage.getItem('userData').then((user_data_json) => {
      console.log("DATA: ", JSON.parse(user_data_json))
      let userData = JSON.parse(user_data_json);
      this.setState({user: userData, loading: false});
    });

  }

  onValueChange (value: string) {
    this.setState({
      selected : value
    });
  }

  render() {
    // If we are loading then we display the indicator, if the account is null and we are not loading
    // Then we display nothing. If the account is not null then we display the account info.
    // return (
    // )
    // conso
    return ( this.state.loading
      ? <ActivityIndicator size="large"/>
      : this.state.user &&
      <View style={styles.container}>
        <View>
          <Text style={styles.text}><Text style={styles.span}>Nom:</Text> SOUEF</Text>
          <Text style={styles.text}><Text style={styles.span}>Prénom</Text> Thibault</Text>
          <Text style={styles.text}><Text style={styles.span}>E-mail:</Text>  {this.state.user.email}</Text>
          <Text style={styles.text}><Text style={styles.span}>Salon séléctionné:</Text> </Text>
          <Picker
            style={{borderRadius: 5, borderWidth: 1, borderColor: '#000'}}
            supportedOrientations={['portrait','landscape']}
            iosHeader="Salons"
            headerBackButtonText="Retour"
            mode="dropdown"
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}>
            <Item label="Salon de l'alternance et des études supérieures" value="key0" />
            <Item label="Salon Européen de l'Education" value="key1" />
            <Item label="Salon spécial Masters, mastères et MBA" value="key2" />
            <Item label="Salon du Numérique et de l'informatiques" value="key3" />
          </Picker>
        </View>
        <View style={styles.logoutContainer}>
          <Button style={{backgroundColor: '#757575'}} small rounded onPress={this.logout.bind(this)}>
            <Text>Se Déconnecter</Text>
          </Button>
        </View>
      </View>
    );

  }

  logout() {
    // logout, once that is complete, return the user to the login screen.
    AsyncStorage.removeItem('userData').then(() => {
      firebase.auth().signOut().then(() => {
        this._navigateTo('Login')
      });
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
    justifyContent: 'space-between'
  },
  span: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#212121'
  },
  text: {
    fontSize: 16,
    color: '#212121',
    marginBottom: 15
  },
  picker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000'
  },
  logoutContainer: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end'
  }
})

export default Account;
