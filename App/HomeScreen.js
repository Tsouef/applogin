import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './components/Login/Login';

class HomeScreen extends Component {
    render() {
        return (
            <Login />
            // <View style={styles.wrapper}>
            //     <View style={styles.titleWrapper}>
            //         <Text style={styles.title}>L'Etudiant</Text>
            //     </View>
            //     <View>
            //         <Login />
            //         <Text style={styles.subtitle}>Version 0.0.1</Text>
            //     </View>
            // </View>
        )
    }
}


const styles = StyleSheet.create ({

    wrapper: {
        backgroundColor: '#e74c3c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleWrapper: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },

    subtitle: {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20
    }
});

export default HomeScreen;