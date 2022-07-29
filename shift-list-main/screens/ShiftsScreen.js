import React, { useState } from 'react';
import { SectionList,Button, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
// import {SHIFTS}  from '../data/shifts';
import Shift from '../model/Shift';


export default function SiftsScreen() {
   
  const [day, setDay] = useState("sunday");

    
  return (
    <View style={styles.container}>
        <Text>משמרות השבוע:</Text>
        <View style={styles.buttons}>
        <TouchableOpacity
        style={styles.button}
        onPress={()=>setDay("friday")}
      >
        <Text style={styles.text}>יום ה'</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.text}>יום ד'</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.text}>יום ג'</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.text}>יום ב'</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.text}>יום א'</Text>
      </TouchableOpacity>
      </View>
      <Text>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title:{
    fontSize:22,
    padding:10
  },
  text:{
    color:"#fff"
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 25,
    height: 55,
  },
  input: {
    borderColor:"black",
    borderRadius:1,
    borderWidth:1,
    height:20
  },
  buttons:{
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    margin:3,
    borderRadius:10
  }
});
