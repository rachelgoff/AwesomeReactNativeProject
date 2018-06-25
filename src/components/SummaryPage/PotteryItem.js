import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { priceDisplay } from '../../util'

export default class PotteryItem extends Component{
    static propTypes = {
        potteryItem: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired
    }
    
    handlePress = () =>{
        this.props.onPress(this.props.potteryItem.key)
    }
        
    render(){
        const { potteryItem } = this.props;
        return(
           <TouchableOpacity style={styles.potteryContainer} onPress={()=>this.handlePress()}>
            <Image style={styles.image} source={{ uri: potteryItem.media[0]}}/>
            <View style={styles.info}> 
                <Text style={styles.title} >{ potteryItem.title }</Text>
                 <View style={styles.footer}>
                  <Text style={styles.cause}>{ potteryItem.cause.name }</Text>
                  <Text style={styles.price}>{ priceDisplay(potteryItem.price) }</Text>
                 </View>
             </View>
           </TouchableOpacity>
         )
    }
}

const styles = StyleSheet.create({
     potteryContainer:{
        flex: 1,
        backgroundColor:'#55efc4'
        },
    image: {
        width:'100%',
        height:150
    },
    info: {
        padding: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderTopWidth: 0 
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
