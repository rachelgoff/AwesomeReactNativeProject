import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
    handleOnPress(){
         this.props.navigation.navigate('PotteryType')
         console.log("button pressed")
   }
    render(){       
        return (
            <View style={styles.container} >
                <TextInput 
                    placeholder='username or email' 
                    keyboardType='email-address' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    placeholderTextColor='rgba(255,255,255,0.7)' 
                    returnKeyType ='next' 
                    onSubmitEditing = {()=>this.passowrdInput.focus()}
                    style={styles.input}>
                </TextInput>
                <TextInput 
                    placeholder='passowrd' 
                    placeholderTextColor='rgba(255,255,255,0.7)' 
                    secureTextEntry={true} 
                    returnKeyType='go' 
                    ref={(input)=>this.passowrdInput=input} 
                    style={styles.input}>
            </TextInput>
            
            <TouchableOpacity>
                <Text style={styles.buttonContainer} 
                onPress={() => this.props.navigation.navigate('Card')}>
                Login</Text>
            </TouchableOpacity>
            
            <View style={styles.buttonText}>
                <TouchableOpacity>
                <Text style={styles.buttonTextLeft} 
                onPress={() => this.props.navigation.navigate('Card')}>
                Signup</Text>
              </TouchableOpacity>

             <TouchableOpacity>
                <Text style={styles.buttonTextRight} 
                onPress={() => this.props.navigation.navigate('PotteryType')}>
                Guests login</Text>
              </TouchableOpacity>
            </View>
        </View>         
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        padding: 20      
    },
    input:{
        height: 40,
        marginBottom: 20,
        color: '#FFF',
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10
    },
    buttonContainer:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        paddingVertical:15,
        marginBottom: 30,
        backgroundColor: '#16a085'
    },
    buttonTextRight:{
        color: '#FFFFFF',
        textAlign: 'right',
        fontWeight: '700',
        marginBottom: 60
    },
    buttonTextLeft:{
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: '700',
        marginBottom: 60
    },
    buttonLeft:{
        fontWeight: '700',
        marginBottom: 60
    },
    buttonText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 60
    }
})
