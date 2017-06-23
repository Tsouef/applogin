import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

class AccountButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Icon name="cog" onPress={() => navigate('Account')} size={30}  />
    )
  }
}

export default AccountButton;
