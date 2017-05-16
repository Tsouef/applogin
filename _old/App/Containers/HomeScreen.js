import React,{ Component }  from 'react';
import {
  View,
  Text,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'QRcode',
  };
  render() {
    return (
      <View style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Hello, QRcode!</Text>
      </View>
    )
  }
}






export default HomeScreen;
