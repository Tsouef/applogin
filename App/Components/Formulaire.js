import React, { Component }  from 'react';
import {
  ScrollView,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Button, Text } from 'native-base';
import ModalDropdown from 'react-native-modal-dropdown';
import userJSON from '../Fixtures/users.json';
import Icon from 'react-native-vector-icons/FontAwesome';

class Formulaire extends Component {
  static navigationOptions = {
    tabBarLabel: 'Utilisateur',
    tabBarIcon: <Icon name="user-plus" size={30}  />
  };

  constructor(props) {
    super(props);
    // TODO: Gérer les states correctement.
    this.state = {
      id: 2,
      counter: 5,
      firstName: '',
      lastName: '',
      city: '',
      study: '',
      selectedItem: undefined,
        selected1: 'key1',
        results: {
            items: []
        }
    }
  }

  componentWillMount() {
    var data = this.getData();
    this.setState({data : data});
  }

  getData() {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
        responseData.map((elem) => {
          if (elem.id === this.state.id) {
              this.setState({
                firstName: elem.firstName,
                lastName: elem.lastName,
                city: elem.city,
                study: elem.study
              })
          }
        })
      })
     .done();
  }

  onSubmit() {
    fetch('http://localhost:3000/users',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          city: this.state.city,
          study: this.state.study
        })
      }
    )
    .then(function(response){
     return response.json();
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="rgba(0,0,0,0.7)"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChange={(event) => this.setState({email: event.nativeEvent.text})}
          defaultValue={this.state.email}
        />
        <TextInput
          placeholder="Code Postal"
          placeholderTextColor="rgba(0,0,0,0.7)"
          returnKeyType="next"
          keyboardType="numeric"
          style={styles.input}
          onChange={(event) => this.setState({postCode: event.nativeEvent.text})}
          defaultValue={this.state.postCode}
        />
        <ModalDropdown
          style={styles.input}
          textStyle={styles.dropDownText}
          dropdownStyle={styles.dropdownStyle}
          defaultValue='Etudes'
          options={['Lycée', 'Collège', 'Maternelle', 'Primaire', 'Retraité']}
        />
        <View>
          <Text>Accompagnant {this.state.counter}</Text>
          <Button onPress={() => this.setState({counter: this.state.counter + 1})}><Text>Ajouter</Text></Button>
          <Button onPress={() => this.setState({counter: this.state.counter - 1})}><Text>Supprimer</Text></Button>
        </View>
        <Button
          block
          info
          onPress={this.onSubmit.bind(this)}
        >
          <Text>Valider</Text>
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#EAEBED',
    },
    input: {
      width: '100%',
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 20,
      paddingHorizontal: 10
    },
    dropDownText: {
      marginTop: 10,
      fontSize: 16,
      color: 'rgba(0,0,0,0.7)',
    },
    dropdownStyle: {
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
    button: {
      borderColor: '#000066',
      borderWidth: 1,
      borderRadius: 10,
      color: '#EAEBED',
    }


})

export default Formulaire;
