import React,{ Component }  from 'react';
import {
  ScrollView,
  Button,
  View,
  TextInput,
  Text,
  StyleSheet
} from 'react-native';
import WithLabel from '../Components/WithLabel';
import userJSON from '../fixtures/users.json'

class Formulaire extends Component {

  static navigationOptions = {
    tabBarLabel: 'Utilisateur',
  };

  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      firstName: '',
      lastName: '',
      city: '',
      study: ''
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
        this.setState({
          movies: responseData.movies,
        });
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
      console.log('response: ', response);
     return response.json();
    })
    .then(function(data){
      console.log(data)
    });
  }

  render() {
    return (
      <ScrollView style={{padding: 40}}>
        <View>
          <WithLabel label="Prénom">
            <TextInput
              onChange={(event) => this.setState({firstName: event.nativeEvent.text})}
              defaultValue={this.state.firstName}
              style={styles.default}
              value={this.state.firstName}
            />
          </WithLabel>
          <WithLabel label="Nom">
            <TextInput
              onChange={(event) => this.setState({lastName: event.nativeEvent.text})}
              defaultValue={this.state.name}
              style={styles.default}
              value={this.state.lastName}
            />
          </WithLabel>
          <WithLabel label="Ville">
            <TextInput
              onChange={(event) => this.setState({city: event.nativeEvent.text})}
              defaultValue={this.state.city}
              style={styles.default}
              value={this.state.city}
            />
          </WithLabel>
          <WithLabel label="Niveau d'études">
            <TextInput
              onChange={(event) => this.setState({study: event.nativeEvent.text})}
              defaultValue={this.state.study}
              style={styles.default}
              value={this.state.study}
            />
          </WithLabel>
          <Button
            onPress={this.onSubmit.bind(this)}
            title="Ajouter"
          />
        </View>
      </ScrollView>
    );
  }
}
var styles = StyleSheet.create({
  default: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    padding: 4,
  },
});

export default Formulaire;
