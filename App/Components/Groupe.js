import React,{ Component }  from 'react';
import {
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class Groupe extends Component {
  static navigationOptions = {
    tabBarLabel: 'Groupe',
    tabBarIcon: <Icon name="users" size={30}  />
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
