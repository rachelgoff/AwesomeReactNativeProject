import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, StatusBar, KeyboardAvoidingView } from 'react-native'
import LoginForm from './LoginForm'

export default class Login extends Component {
    
    // receives this.props.navigation
    
    render (){
        return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >

            <View style={styles.logoContainer}>
            <Image 
              style={styles.logo}
              source={require('../../images/cups.png')}
            />
            <Text style={styles.title}> An app for pottery fans</Text>
            </View>  
            <View style={styles.formContainer}>
                <LoginForm navigation={this.props.navigation}/>
            </View>
        </KeyboardAvoidingView>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1abc9c'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    logo: {
        width: 120,
        height: 120
    },
    title: {
        color: 'white',
        marginTop: 10,
        opacity: 0.7
        
    },
    formContainer: {
        padding: 20
    }
})