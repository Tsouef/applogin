import React , { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar} from 'react-native';

class LoginForm extends Component {
    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                />
                <TextInput
                    placeholder="Nom d'utilisateur"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Mot de passe"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: 'black',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#E8160C',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
})

export default LoginForm;
