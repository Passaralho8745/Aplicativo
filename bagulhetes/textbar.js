import {React, useState } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';

export function textbar() {
  [text, setText] = useState('');
  function mudotexto(texto){
    setText(texto);
  }
  return (
    <TextInput
      style={styles.textinput}
      onChangeText={mudotexto}
      value={text}
      placeholder="Adicione um sintoma..."
      multiline={true}
      adjustsFontSizeToFit={false}
    />
  );
}

const styles = StyleSheet.create({
  textinput: {
      left:"14%",
      top:"15%",
      flex:1,
      backgroundColor: "white",
      height:"7%",
      width:"60%",
      borderRadius:5000,
      position:"absolute",
      paddingLeft:10,
  },
});