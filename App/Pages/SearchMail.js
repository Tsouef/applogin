import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  InputGroup,
  Input,
  Button,
  Text
} from 'native-base';

class SearchMail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <InputGroup>
            <Input
              style={styles.input}
              onChange={(event) => this.setState({email: event.nativeEvent.email})}
              returnKeyType="next"
              placeholderTextColor='#FFFFFF'
              placeholder={"Adresse e-mail"}
            />
          </InputGroup>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() =>this._navigateTo('Formulaire')}><Text>Valider</Text></Button>
        </View>
      </View>
    )
  }

  _navigateTo = (routeName: string) => {
    console.log("Navigate Actions : ", NavigationActions, this.props);
    const actionToDispatch = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: routeName })],
  });
  this.props.navigation.dispatch(actionToDispatch);
  }
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      backgroundColor: '#D32F2F',
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    inputContainer: {
      flex: 0
    },
    buttonContainer: {
      marginTop: 20,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end'
    }
})

export default SearchMail
