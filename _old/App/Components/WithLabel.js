import React, { Component }  from 'react';
import {
  ScrollView,
  Button,
  View,
  TextInput,
  Text,
  StyleSheet
} from 'react-native';

class WithLabel extends Component {
  render() {
    return (
      <View style={styles.labelContainer}>
        <View style={styles.label}>
          <Text>{this.props.label}</Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}
var styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    marginVertical: 2,
    flex: 1,
  },
  label: {
    width: 115,
    alignItems: 'flex-end',
    marginRight: 10,
    paddingTop: 2,
  }
});

export default WithLabel;
