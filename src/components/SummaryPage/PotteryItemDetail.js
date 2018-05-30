import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { priceDisplay } from '../../util'


export default class PotteryItemDetail extends Component{
    static propTypes = {
        initialPotteryData: PropTypes.object.isRequired,
    }
    
    state = {
        potteryItem: this.props.initialPotteryData,
    }
    
    render(){
        const { potteryItem } = this.state;
        return(
        <View style={styles.potteryContainer}>
           <TouchableOpacity style={styles.potteryDetail}>
            <Image style={styles.image} source={{ uri: potteryItem.media[0]}}/>
            <View style={styles.info}> 
                <Text style={styles.title} >{ potteryItem.title }</Text>
                 <View style={styles.footer}>
                  <Text style={styles.cause}>{ potteryItem.cause.name }</Text>
                  <Text style={styles.price}>{ priceDisplay(potteryItem.price) }</Text>
                 </View>
             </View>
             <Text>...</Text>
           </TouchableOpacity>
           </View>
         )
    
    }
}

const styles = StyleSheet.create({
    
    potteryContainer:{
        flex: 1,
        backgroundColor:'#55efc4'
        

    },
    potteryDetail: {
        marginTop: 50,
        marginHorizontal: 12,
        
     
    },
    image: {
        width:'100%',
        height:150

    },
    info: {
        padding: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderTopWidth: 0,
  
        
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white'
    },
    footer: {
        flexDirection: 'row'
    },
    cause: {
        flex: 2,
        color: 'white'
    },
    price: {
        flex: 1,
        textAlign: 'right',
        color: 'white'
    }
})
