import React,{ Component }  from 'react';
import {
  View,
  Text,
} from 'react-native';

class Utilisateur extends Component {
  static navigationOptions = {
    tabBarLabel: 'Utilisateur',
  };
  render() {
    return (
      <View style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Page pour un Utilisateur</Text>
      </View>
    );
  }
}

export default Utilisateur;
