import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';


export default class PotteryItems extends Component{
    static propTypes = {
        potteryItem: PropTypes.object.isRequired,
    }
    
    
    render(){
        return(
           <View style={styles.potteryContainer}>
             <Image source={{uri:this.props.potteryItem.media[0]}}/>
         
           </View>
         )
    
    }
}

const styles = StyleSheet.create({
    potteryDescription:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    justifyContent: 'center',
    alignItems:'center',
    color:'white'
    },
    
    potteryContainer:{
        flex: 1,
        backgroundColor:'#55efc4'

    },
    textContainer:{
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 100
    },
    buttonTextLeft:{
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: '700',
        margin: 60
        
    },
    image: {
        width:'100%',
        height:150
    }
})
