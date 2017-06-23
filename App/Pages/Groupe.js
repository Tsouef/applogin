import React,{ Component }  from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountButton from '../Components/AccountButton';


class Groupe extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerRight: <AccountButton navigation={navigation} />,
    tabBarLabel: 'Groupe',
    tabBarIcon: <Icon name="users" size={30}  />
  });

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Quel Groupe?</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="qrcode" color='#FFF' onPress={() => navigate('QrView')} size={80}  />
          <Icon name="envelope" color='#FFF' onPress={() => navigate('SearchMail')} size={70}  />
          <Icon name="barcode" color='#FFF' onPress={() => navigate('Formulaire')} size={70}  />
          <Icon name="graduation-cap" color='#FFF' onPress={() => navigate('Formulaire')} size={70}  />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#D32F2F',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textContainer: {
    flex: 0
  },
  iconContainer: {
    flex: 2,
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 30,
    color: '#FFFFFF'
  }
})

export default Groupe;
