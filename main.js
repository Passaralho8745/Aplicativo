import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { butao } from './bagulhetes/butao';
import { textbar } from './bagulhetes/textbar';
import { C, rainbowf } from './bagulhetes/constantes';
import { sintomas } from './bagulhetes/sintomas';
import { doencas } from './bagulhetes/doencas';


function getrainbow(){ attcor(rainbowf()); } setInterval(getrainbow, 300);








export function main() {
  [cor, attcor] = useState("rgb(0,0,0)");
  return (
    <View style={styles.container}>
      <View style={[styles.fundo2, {backgroundColor:cor}]}/>
      <View style={styles.fundo1}/>
      <View style={styles.fundo3}/>
      <View style={styles.fundo4}/>
      {sintomas()}
      {butao()}
      {textbar()}
      {doencas()}
    </View>
  );
}














const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#7dbaff',
  },
  fundo1: {
    left:"5%",
    top:"5%",
    height:"90%",
    width:"90%",
    borderRadius:C.telay*0.1,
    flex: 1,
    backgroundColor:"black",
    position:"absolute",
  },
  fundo2: {
    left:"4%",
    top:"4%",
    height:"92%",
    width:"92%",
    borderRadius:C.telay*0.11,
    flex: 1,
    backgroundColor:"yellow",
    position:"absolute",
  },
  fundo3: {
    left:"15%",
    top:"25%",
    height:"25%",
    width:"70%",
    borderRadius:C.telay*0.05,
    flex: 1,
    backgroundColor:"white",
    position:"absolute",
  },
  fundo4: {
    left:"15%",
    top:"58%",
    height:"30%",
    width:"70%",
    borderRadius:C.telay*0.05,
    flex: 1,
    backgroundColor:"white",
    position:"absolute",
  },
});