import {React, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { C, lerp, colorstring } from './constantes';


export function doencas(){
    [doencass, doeatt] = useState([
        {
            name:"dor no olho",
            id:0,
            keys:["soco", "furo"],
            risk:0,
        },
        {
            name:"feto",
            id:1,
            keys:["aborto"],
            risk:200,
        },
    ])
    let starty1 = styles.buttonstyle.top;
    return(
        doencass.map((doenca, index) => (

            <TouchableOpacity
              key={index}
              style={[styles.buttonstyle, {top:starty1+index*C.telay*0.05, backgroundColor:lerp(C.gray,C.red,doenca.risk)}]}
              onPress={() => {console.log("abre uma tela com explicações da doença")}}
            >
                <Text style={styles.text1}>{doenca.name}</Text>
            </TouchableOpacity>
        ))
    )
}



const styles = StyleSheet.create({
    buttonstyle: {
        flex:1,
        backgroundColor: '#e8e8e8',
        left:"16.5%",
        borderRadius:10,
        top:C.telay*0.63,
        height:"4%",
        width:"67%",
        position:"absolute",
    },
    text1: {
        top:0,
        left:0,
        paddingLeft:C.telax*0.03,
        paddingTop:C.telay*0.008,
        flex:1,
        color:"black",
        fontSize:C.telax*0.03,
        position:"absolute",
    },
  });