import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class PotteryType extends Component{ 
    render(){
        return(
            <View style={styles.potteryContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.potteryDescription}>
                    Wanna make a bottle?
                    </Text>
                </View>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={require('../../images/bottle.png')}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.potteryDescription}
                    onPress={() => this.props.navigation.navigate('ClayType')}>
                    I'll do it!</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.potteryDescription}
                    onPress={() => this.props.navigation.navigate('PotteryLists')}>
                    What do I have in progress?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.buttonTextLeft} 
                          onPress={() => this.props.navigation.goBack()}>
                    Go back</Text>
                </TouchableOpacity>
            </View>
          )
    }
}

const styles = StyleSheet.create({
    potteryDescription:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    color:'white'
    },    
    potteryContainer:{
        flex: 1,
        backgroundColor:'#55efc4'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent:'center',
        flexGrow:1
    },
    logo: {
        width: 260,
        height: 260
    },
    textContainer:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 100
    },
    buttonTextLeft:{
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: '700',
        margin: 60  
    }
})
