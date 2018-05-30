import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
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
             <FlatList style={styles.potteryLists}
              data={this.props.potteryLists}
              renderItem={({item}) => <PotteryItem potteryItem={item} onPress={this.props.onItemPress} />}
            />
         
           </View>
         )
    
    }
}

const styles = StyleSheet.create({
    potteryLists:{
        marginHorizontal: 12,
        marginTop: 50
    },
    
    potteryContainer:{
        flex: 1,
        backgroundColor:'#55efc4'

    }
    
})
