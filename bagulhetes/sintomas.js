import {React, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { C } from './constantes';


export function sintomas(){
    [sintomass, sinatt] = useState([
        {
            name:"dor no olho",
            id:0,
        },
        {
            name:"teu pai",
            id:1,
        },
    ])
    let starty1 = styles.buttonstyle.top;
    return(

        sintomass.map((sintoma, index) => (

            <TouchableOpacity
              key={index}
              style={[styles.buttonstyle, {top:starty1+index*C.telay*0.05}]}
              onPress={() => {console.log(index), sinatt(sintomass.filter((item) => item.id !== sintoma.id))}}
            >
                <Text style={styles.text2}>x</Text>
                <Text style={styles.text1}>{sintoma.name}</Text>
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
        top:C.telay*0.28,
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
    text2: {
        top:0,
        left:C.telax*0.60,
        flex:1,
        color:"white",
        fontSize:C.telax*0.05,
        textAlign: 'right',
        position:"absolute",
    },
    
  });