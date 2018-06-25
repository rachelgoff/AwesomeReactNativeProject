import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, Picker } from 'react-native';

class PickFiringType extends Component {
   state = {firingType: 'Bisque'}
   updateFiringType = (firingType) => {
      this.setState({ firingType: firingType })
   }
   
   render() {
      return (
       <View>
         <Picker selectedValue={this.state.firingType} onValueChange={this.updateFiringType.bind(this)}>
            <Picker.Item color='white' label="Bisque" value="Bisque" />
            <Picker.Item color='white' label="Cone 10" value="Cone 10" />
            <Picker.Item color='white' label="Cone 5" value="Cone 5" />
            <Picker.Item color='white' label="Low Fire" value="Low Fire" />
            <Picker.Item color='white' label="Salt Fire" value="Salt Fire" />
            <Picker.Item color='white' label="Soda Fire" value="Soda Fire" />
            <Picker.Item color='white' label="Wood Fire" value="Wood Fire" />
          </Picker>
          
        <Text style={styles.potteryDescription}>
            "You chose {this.state.firingType}". The item will be created at {Date()}.
        </Text>
        </View>
      )
   }
}

export default class FireType extends Component{
    render(){
        return(
            <View style={styles.potteryContainer}>
   
                <View style={styles.textContainer}>
                    <Text style={styles.potteryDescription}>
                    What's the firing type? 
                    </Text>
                </View>
                <PickFiringType style={styles.potteryDescription}/>
                <TouchableOpacity>
                    <Text style={styles.potteryDescription} 
                    onPress={() => this.props.navigation.navigate('CameraScreen')}>
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
