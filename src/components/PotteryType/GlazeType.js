import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, Picker } from 'react-native';



class PickGlazeType extends Component {

   state = {glazeType: 'Celadon'}
   updateGlazeType = (glazeType) => {
      this.setState({ glazeType: glazeType })
   }
   
   render() {

      return (
       <View>
        <Picker selectedValue={this.state.glazeType} onValueChange={this.updateGlazeType}>
            <Picker.Item color='white' label="Celadon" value="Celadon" />
            <Picker.Item color='white' label="Clear" value="Clear" />
            <Picker.Item color='white' label="Shino" value="Shino" />
            <Picker.Item color='white' label="Tenmoku" value="Tenmoku" />
            <Picker.Item color='white' label="Turquoise Matt" value="Turquoise Matt" />
        </Picker>
        
        <Text style={styles.potteryDescription}>
            "You chose {this.state.glazeType}". The item will be created at {Date()}.
        </Text>
        </View>
      )
   }
}


export default class GlazeType extends Component{
    render(){
        return(
            <View style={styles.potteryContainer}>
   
                <View style={styles.textContainer}>
                    <Text style={styles.potteryDescription}>
                    What's the glaze type?
                    </Text>
                </View>
                <PickGlazeType style={styles.potteryDescription}/>
                <TouchableOpacity>
                    <Text style={styles.potteryDescription} 
                    onPress={() => this.props.navigation.navigate('FiringType')}>
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