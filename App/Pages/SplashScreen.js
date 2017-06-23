import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator
} from 'react-native';

const SplashScreen = () => (
  <View style={styles.container}>
    <Image style={styles.image} resizeMode={Image.resizeMode.center} source={require('../assets/images/logo.png')} />
    <ActivityIndicator size="large" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D32F2F'
  }

})
export default SplashScreen;
