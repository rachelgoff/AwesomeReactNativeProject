import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import PotteryItems from './PotteryItems';
import PotteryItem from './PotteryItem';
import PotteryItemDetail from './PotteryItemDetail';

import ajax from '../../ajax.js'

export default class PotteryLists extends Component{
    state = {
    potteryLists: [],
    currentPotteryId: null,
  }
  async componentDidMount(){
    const potteryLists = await ajax.fetchPotteryLists();

    this.setState(() => {
      return { potteryLists }
      
    });
  }
  setCurrentPottery = (potteryId) => {
      this.setState({
          currentPotteryId: potteryId
      })
  }
  
    currentPottery = () => {
        return this.state.potteryLists.find(
            (potteryItem) => potteryItem.key === this.state.currentPotteryId
            );
    }
  
    render(){
        
        if (this.state.currentPotteryId) {
            return <PotteryItemDetail initialPotteryData = {this.currentPottery()}/>
        }
        
        if (this.state.potteryLists.length > 0) {
            return <PotteryItems potteryLists={this.state.potteryLists} onItemPress={this.setCurrentPottery}/>
        }
        
        return(
           <View style={styles.potteryContainer}>
               
                <Text style={styles.potteryDescription}> PotteryLists </Text>
         
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
    color:'white',
    margin: 100
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