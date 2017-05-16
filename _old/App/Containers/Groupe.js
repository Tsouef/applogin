import React,{ Component }  from 'react';
import {
  View,
  Text,
} from 'react-native';

class Groupe extends Component {
  static navigationOptions = {
    tabBarLabel: 'Groupe'
  };

  render() {
    return (
      <View style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Page pour le Groupe</Text>
      </View>
    )
  }
}

export default Groupe;
