import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { C } from './constantes';








function click(){
  console.log("oie")
}




export function butao() {
  return (
    <TouchableOpacity style={styles.butao} onPress={click}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
}









const styles = StyleSheet.create({
    butao: {
      flex:1,
      backgroundColor: 'green',
      borderRadius: 500,
      left:"55%",
      top:"15%",
      height:"7%",
      width:"30%",
      position:"absolute",
    },
    text: {
      top:"-10%",
      left:"65%",
      flex:1,
      color:"#d8d7db",
      fontSize:C.telax*0.1,
    },
});