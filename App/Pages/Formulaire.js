import React, { Component }  from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';
import { Button, Text, InputGroup, Input, Picker } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountButton from '../Components/AccountButton';

const Item = Picker.Item;


class Formulaire extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerRight: <AccountButton navigation={navigation} />,
    tabBarLabel: 'Utilisateur',
    tabBarIcon: <Icon name="user-plus" size={30}  />
  });

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
      selected: 'key1',
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
    // fetch('http://localhost:3000/users')
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     console.log(responseData)
    //     responseData.map((elem) => {
    //       if (elem.id === this.state.id) {
    //           this.setState({
    //             firstName: elem.firstName,
    //             lastName: elem.lastName,
    //             city: elem.city,
    //             study: elem.study
    //           })
    //       }
    //     })
    //   })
    //  .done();
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

  onValueChange (value: string) {
    this.setState({
      selected : value
    });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.form}>
          <InputGroup>
            <Icon name="user-circle" style={{color: '#FFFFFF'}} />
            <Input
              style={styles.input}
              onChange={(event) => this.setState({email: event.nativeEvent.text})}
              value={this.state.email}
              keyboardType="email-address"
              returnKeyType="next"
              placeholderTextColor='#FFFFFF'
              placeholder={"Adresse e-mail"}
              defaultValue={this.state.email}
            />
          </InputGroup>
          <InputGroup>
            <Icon name="location-arrow" style={{color: '#FFFFFF'}} />
            <Input
              style={styles.input}
              onChange={(event) => this.setState({postCode: event.nativeEvent.text})}
              value={this.state.lastname}
              returnKeyType="next"
              placeholderTextColor='#FFFFFF'
              placeholder={"Code Postal"}
              keyboardType="numeric"
              defaultValue={this.state.postCode}
            />
          </InputGroup>
          <InputGroup>
            <Icon name="graduation-cap" style={{color: '#FFFFFF'}} />
            <Picker
              textStyle={{color: '#FFFFFF'}}
              supportedOrientations={['portrait','landscape']}
              iosHeader="Etudes"
              headerBackButtonText="Retour"
              mode="dropdown"
              placeholder="Etudes"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}>
              <Item label="Collège" value="key0" />
              <Item label="Lycée" value="key1" />
              <Item label="FAC" value="key2" />
              <Item label="DUT-IUT" value="key3" />
            </Picker>
          </InputGroup>
          <View style={styles.counter}>
            <Text style={styles.counterText}>Accompagnant(s):  {this.state.counter}</Text>
            <View style={styles.counterIcon}>
              <Icon name="plus-circle" size={25} color="#FFFFFF" onPress={() => this.setState({counter: this.state.counter + 1})} />
              <Icon name="minus-circle" size={25} color="#FFFFFF" onPress={() => this.setState({counter: this.state.counter - 1})} />
            </View>
          </View>
          <Button style={{backgroundColor: '#448AFF'}} small block rounded onPress={this.onSubmit.bind(this)}>
            <Text>Valider</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
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
    counter: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 25,
      marginBottom: 25
    },
    counterText: {
      color: '#FFFFFF'
    },
    counterIcon: {
      display: 'flex',
      flexDirection: 'column'
    }
})

export default Formulaire;
