import React, { Component }  from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { TabNavigator, NavigationActions } from 'react-navigation';
import Camera from 'react-native-camera';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountButton from '../Components/AccountButton';


class QrView extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerRight: <AccountButton navigation={navigation} />,
    tabBarLabel: 'QRcode',
    tabBarIcon: <Icon name="qrcode" size={30}  />
  });

  onBarCodeRead(e) {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Utilisateur',
      params: {},
      action: NavigationActions.navigate({ routeName: 'Utilisateur'})
    })

    this.props.navigation.dispatch(navigateAction)
    this.setState({data: e.data});


    console.log(
        "Barcode Found!",
        "Type: " + e.type + "\nData: " + e.data
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}

          onBarCodeRead={this.onBarCodeRead.bind(this)}
          style={styles.preview}
          aspect={Camera.constants.Aspect.Fill}>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});



export default QrView;
