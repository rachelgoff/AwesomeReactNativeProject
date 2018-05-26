import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import PotteryItem from './PotteryItem'


export default class PotteryItems extends Component{
    static propTypes = {
        potteryLists: PropTypes.array.isRequired,
        onItemPress: PropTypes.func.isRequired
    }
    
    
    render(){
        return(
           <View style={styles.potteryContainer}>
             <FlatList
              data={this.props.potteryLists}
              renderItem={({item}) => <PotteryItem potteryItem={item} onPress={this.pros.onItemPress} />}
            />
         
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
        
    }
})
