import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../images/logo.png')}
                    />
                    <Text style={styles.title}>Application salon de L'ETUDIANT</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bdc3c7'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 50,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 10,
        color: 'black',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
});

export default Login;