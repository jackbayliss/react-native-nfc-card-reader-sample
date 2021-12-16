import React, { Component } from 'react'
import {View, Button, Text} from 'react-native'
import NfcCardReader from 'react-native-nfc-card-reader'




export default class App extends Component {


  state = {
    cardNumber : null,
    expiryDate : null,
    cardType : null,
    firstname : null,
    surname : null,
 }


 async startScan(){
   let that = this;
   await NfcCardReader.startNfc(function(cardDetails){
     console.log(cardDetails)
     that.setState({cardNumber : cardDetails.cardNumber})
     that.setState({expiryDate : cardDetails.expiryDate})
     that.setState({cardType : cardDetails.cardType})
     that.setState({firstname : cardDetails.firstname})
     that.setState({surname : cardDetails.surname})

    })
 }

  render() {
  return <View style={{flex:1,justifyContent: 'center',margin:20, alignContent:'center'}}>
    <Button title="Start NFC Scan!" onPress={() => {this.startScan()}} ></Button>
    <Text>{this.state.cardNumber}</Text>
    <Text>{this.state.expiryDate}</Text>
    <Text>{this.state.cardType}</Text>
    <Text>{this.state.firstname}</Text>
    <Text>{this.state.lastname}</Text>

  </View>

   
  }
}