import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, Picker } from 'react-native';



class PickClayType extends Component {

   state = {clayType: 'B Mix'}
   updateClayType = (clayType) => {
      this.setState({ clayType: clayType })
   }
   
   render() {

      return (
       <View>
        <Picker selectedValue={this.state.clayType} onValueChange={this.updateClayType.bind(this)}>
            <Picker.Item color='white' label="B Mix" value="B Mix" />
            <Picker.Item color='white' label="Porcelain" value="Porcelain" />
            <Picker.Item color='white' label="Black Mountain" value="Black Mountain" />
        </Picker>
        <Text style={styles.potteryDescription}>
            "You chose {this.state.clayType}". The item will be created at {Date()}.
        </Text>
       </View>
      )
   }
}


export default class ClayType extends Component{
    render(){
        return(
            <View style={styles.potteryContainer}>
   
                <View style={styles.textContainer}>
                    <Text style={styles.potteryDescription}>
                    What's the clay type? 
                    </Text>
                </View>
                <PickClayType style={styles.potteryDescription}/>
                <TouchableOpacity>
                    <Text style={styles.potteryDescription} 
                    onPress={() => this.props.navigation.navigate('GlazeType')}>
                    Next step</Text>
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
    color:'white',
    margin: 30
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